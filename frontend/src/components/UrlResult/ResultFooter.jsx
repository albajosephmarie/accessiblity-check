import useAccessibility from '../../AccessibilityContext'
import './ResultFooter.css'
const ResultFooter = () => {
  return (
    <div className="result-footer">
      <div className="result-footer-content">
        <div className="result-footer-action">
          <ResultCancelButton />
          <ResultDownloadButton />
        </div>
      </div>
    </div>
  )
}

const ResultCancelButton = () => {
  const { enterUrl } = useAccessibility()
  const handleClick = () => {
    enterUrl()
  }
  return (
    <button className="result-footer-cancel-button" onClick={()=>handleClick()}>
      <span className="result-footer-cancel-text">Cancel</span>
    </button>
  )
}

const ResultDownloadButton = () => {
  return  (
    <button className="result-footer-download-button">
      <span className="result-footer-download-text">Download Report</span>
    </button>
  )
}
export default ResultFooter