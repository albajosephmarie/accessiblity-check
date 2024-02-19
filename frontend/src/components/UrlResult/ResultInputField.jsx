import './ResultInputField.css'
import useAccessibility from "../../AccessibilityContext"

const ResultInputField = () => {
  const { url } = useAccessibility()
  return (
    <div className="result-input-field">
      <div className="result-input-with-label">
        <div className="result-input">
          <div className="result-input-content">
            <div className="result-www-text">
              {url}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResultInputField