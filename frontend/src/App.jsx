import UrlWebsite from "./components/UrlWebsite"
import UrlResult from './components/UrlResult'
import useAccessibility from "./AccessibilityContext"
import { useEffect } from "react"

const App = () => {
  const { stage, url, success, error, enterUrl, checkUrl } = useAccessibility()

  useEffect(() => {
    try {
      if (stage === 'url_set') {
        checkUrl()
      } 
    } catch (error) {
      console.log('error')
      enterUrl()
    }
  }, [stage, checkUrl, enterUrl])

  //   return (
  //     <>
  //     <UrlResult />
  //     </>
  //   )
  // }
  if (stage === 'url_check' && !success) {
    enterUrl()
    return (<div><h1>Error:</h1><p>{error}</p></div>)
  }
  return (
    <>
      {(stage === 'url_entry')
        ? <UrlWebsite />
        : (stage === 'url_set')
          ? <h1>Checking your site...</h1>
          : (stage === 'url_check')
            ? <UrlResult />
            : <h1>KD {url} {stage}</h1>
      }
    </>
  )
}

export default App