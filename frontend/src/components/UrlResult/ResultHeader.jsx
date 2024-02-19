import './ResultHeader.css'
const ResultHeader = () => {
  return (
    <div className="result-header">
      <ResultHeaderContent />
      <ResultButtonClose />
    </div>
  )
}

const ResultHeaderContent = () => {
  return (
    <div className="result-header-content">
      <ResultLogomark />
      <ResultTextAndSupportingText />
    </div>
  )
}

const ResultLogomark = () => {
  return (
    <div className="result-logomark">
      <div className="result-vector" />
    </div>
  )
}

const ResultTextAndSupportingText = () => {
  return (
    <div className='result-text-and-supporting-text'>
      <span className='result-text'>Review Results</span>
      <span className='result-supporting-text'>Your accessibility scan is complete—here's what we found!</span>
    </div>
  )
}


const ResultButtonClose = () => {
  return (
    <button className="result-button-close">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="x-close">
          <path id="Icon" d="M15 5L5 15M5 5L15 15" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </button>
  )
}

export default ResultHeader