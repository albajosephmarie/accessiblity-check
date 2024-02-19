import useAccessibility from '../../AccessibilityContext'
import Download from '/download.jpeg'
import './UrlResult.css'
import ResultContent from './ResultContent'
import ResultHeader from './ResultHeader'
import ResultInputField from './ResultInputField'
import ResultFooter from './ResultFooter'

const UrlResult = () => {
  return (
    <div className="url-result">
      <ResultImg />
      <SlideOutMenu />
    </div>
  )
}

const ResultImg = () => {
  const { image } = useAccessibility()
  return (
    <div className="result-img">
      <img src={`data:image/jpeg;base64,${image}`} alt="Screen capture" />
      {/* <img src={Download} alt="Screen capture" /> */}
    </div>
  )
}

const SlideOutMenu = () => {
  return (
    <div className="slide-out-menu">
      <ResultPanel />
    </div>
  )
}

const ResultPanel = () => {
  return (
    <div className="result-panel">
      <ResultHeader />
      <ResultInputField />
      <ResultContent />
      <ResultFooter />
    </div>
  )
}

export default UrlResult
