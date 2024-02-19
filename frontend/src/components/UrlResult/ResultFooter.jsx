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
  return (
    <button className="result-footer-cancel-button">
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