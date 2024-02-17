import { useEffect } from 'react';
import useAccessibility from './AccessibilityContext.jsx';
import UrlEntry from './components/UrlEntry.jsx';

const UrlChecking = () => {
  const { url } = useAccessibility()
  return (
    <div>
      Checking {url}
    </div>
  )
}

const App = () => {
  const { url, result, stage, statusCode, error, image, violations, success, checkUrl } = useAccessibility()
  useEffect(() => {
    if (stage === 'url_set') {
      checkUrl()
    } else if (stage === 'url_check') {
      if (success) {
        console.log('violations', violations)
      }
    }
  }, [stage, checkUrl])
  return (
    <>
      {stage === 'url_entry' && <UrlEntry />}
      {stage === 'url_set' && <UrlChecking />}
      {stage === 'url_check' && <h2>URL Valid</h2>}
      {stage === 'url_check' && success && image && <img src={`data:image/jpeg;base64,${image}`} alt="Screenshot" />}
      <div>
        <p>URL: {url}</p>
        <p>Result: {result}</p>
        <p>Stage: {stage}</p>
        <p>StatusCode: {statusCode}</p>
        <p>Error: {error}</p>
        <p>Success: {success ? 'success' : 'fail'}</p>
      </div>
    </>
  )
}

export default App;