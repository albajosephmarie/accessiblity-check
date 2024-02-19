import UrlWebsite from "./components/UrlWebsite"
import UrlResult from './components/UrlResult'
import useAccessibility from "./AccessibilityContext"
import { useEffect } from "react"

const App = () => {
  const { stage, url, checkUrl } = useAccessibility()

  useEffect(()=> {
    if (stage === 'url_set') {
      checkUrl()
    }
  }, [stage, checkUrl])

//   return (
//     <>
//     <UrlResult />
//     </>
//   )
// }

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