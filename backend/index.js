import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import axios from 'axios'
import puppeteer from 'puppeteer'
import { AxePuppeteer } from '@axe-core/puppeteer'

const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.post('/api/screen', async (request, response, next) => {
  request.setTimeout(300000) // Set timeout to 5 minutes
  const { url } = request.body
  try {
    // Check if URL is valid by making a HEAD request
    console.log(0)
    const options = {
      method: 'HEAD',
    }
    console.log(1)

    const res = await fetch(url, options)
    console.log(2)

    if (!res.ok) {
      const error = new Error('Invalid URL')
      error.statusCode = 400
      throw error
    }
    console.log(3)

    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
    })
    console.log(4)
    const page = await browser.newPage()
    await page.goto(url)
    console.log(5)

    const results = await new AxePuppeteer(page)
      .withRules('color-contrast','color-contrast-enhanced')
      .analyze()
    console.log(5.1)
    // Draw a red border around the elements identified in results
    results.violations.forEach((violation, i) => {
      violation.nodes.forEach((node, j) => {
        page.evaluate(
          (selector, index) => {
            const element = document.querySelector(selector)
            element.style.border = '3px solid red'
            // Create and append a pop-over element
            const popOver = document.createElement('div')
            popOver.style.position = 'absolute'
            popOver.style.top = `${element.getBoundingClientRect().top}px`
            popOver.style.left = `${element.getBoundingClientRect().right}px`
            popOver.style.marginLeft=`2px`
            // popOver.style.width = '40px'

            popOver.style.backgroundColor = 'white'
            popOver.style.color = 'black'
            popOver.style.padding = '1px'
            popOver.style.border = '1px solid red'
            popOver.style.borderRadius = '50%'
            popOver.innerText = `${index}`

            document.body.appendChild(popOver)
          },
          node.target[0],
          j
        )
      })
    })
    console.log(5.2)

    // Take a screenshot
    const screenshot = await page.screenshot({ type: 'png', fullPage: true })
    console.log(6)

    // Convert the screenshot to base64
    const base64Image = screenshot.toString('base64')
    console.log(7)

    // Send the data to the client via JSON
    response.json({ image: base64Image, violations: results.violations })
    console.log(8)

    await browser.close()
    console.log(9)
  } catch (error) {
    next(error) // Pass error to the error handler middleware
  }
})

app.use((err, req, res, next) => {
  return res.status(500).json({
    success: false,
    statusCode: 500,
    message: 'Internal Server Error',
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
