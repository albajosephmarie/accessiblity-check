import { calcAPCA } from "apca-w3"
import useAccessibility from "../../AccessibilityContext"
import "./ResultContent.css"

const ResultContent = () => {
  const { violations } = useAccessibility()
  console.log("v1", violations)
  return (
    <div className="result-content">
      {
        violations.map((violation) => {
          console.log('violation', violation)
          return (
            <ResultContentSection key={violation.id} violation={violation} />
          )
        }
        )
      }
    </div>
  )
}

const ResultContentSection = ({ violation }) => {
  console.log("vvv", violation)
  const { id, help, nodes } = violation
  return (
    <div className="result-content-section">
      <div className='result-content-text-and-supporting-text'>
        <span className="result-content-text">{id}</span>
        <span className="result-content-supporting-text">{help}</span>
      </div>
      {
        nodes.map((node, index) => {
          return (
            <ResultContentFrame key={index} node={node} number={index} />
          )

        }
        )}
      {/* // <ResultContentFrame number={1} cn1={-43.8} cn2={2.03} bg={"#58BFFF"} fg={"#8AB8D6"} /> number, cn1, cn2, bg, fg*/}
    </div>
  )
}

const ResultContentFrame = ({ node, number }) => {
  const bgColor = node.any[0].data.bgColor
  const fgColor = node.any[0].data.fgColor
  const cn1 = node.any[0].data.contrastRatio
  const cn2 = parseFloat(calcAPCA(fgColor,bgColor)).toFixed(1)
  return (
    <div className="result-content-frame">
      <div className="result-content-avatar-wrap">
        <div className="result-content-avatar">
          <div className="contrast-border">
            <span className="result-number">{number}</span>
          </div>
        </div>
        <div className="result-content-connector" />
      </div>
      <div className="result-content-card">
        <div className="result-check-tile">
          <div className="result-check-color">
            <div className="result-contrast-level">
              <div className="result-contrast-number">
                <span className="result-contrast-number-text">{cn2}</span>
                <span className="result-contrast-number-text">{cn1}:1</span>

              </div>
              <div className="result-contrast-score">
                <span className="result-contrast-score-text">
                  <span className="result-contrast-score-svg">
                    <SvgX />
                  </span>
                  <span className="result-contrast-score-status">
                    aa
                  </span>
                </span>
                <span className="result-contrast-score-text">
                  <span className="result-contrast-score-svg">
                    <SvgX />
                  </span>
                  <span className="result-contrast-score-status">
                    aa
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="result-check-bgfg">
            <div className="result-check-bgfg-line">
              <span className="result-check-bgfg-bgname">BG</span>
              <span className='result-check-bgfg-code'>{bgColor}</span>
            </div>
            <div className="result-check-bgfg-line">
              <div className="result-check-bgfg-fg">
                <SvgT />
              </div>
              <span className="result-check-bgfg-code">{fgColor}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const SvgX = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path d="M19.2806 18.7194C19.3502 18.7891 19.4055 18.8718 19.4432 18.9628C19.4809 19.0539 19.5003 19.1515 19.5003 19.25C19.5003 19.3486 19.4809 19.4461 19.4432 19.5372C19.4055 19.6282 19.3502 19.7109 19.2806 19.7806C19.2109 19.8503 19.1281 19.9056 19.0371 19.9433C18.9461 19.981 18.8485 20.0004 18.7499 20.0004C18.6514 20.0004 18.5538 19.981 18.4628 19.9433C18.3717 19.9056 18.289 19.8503 18.2193 19.7806L11.9999 13.5603L5.78055 19.7806C5.63982 19.9214 5.44895 20.0004 5.24993 20.0004C5.05091 20.0004 4.86003 19.9214 4.7193 19.7806C4.57857 19.6399 4.49951 19.449 4.49951 19.25C4.49951 19.051 4.57857 18.8601 4.7193 18.7194L10.9396 12.5L4.7193 6.28063C4.57857 6.1399 4.49951 5.94903 4.49951 5.75001C4.49951 5.55098 4.57857 5.36011 4.7193 5.21938C4.86003 5.07865 5.05091 4.99959 5.24993 4.99959C5.44895 4.99959 5.63982 5.07865 5.78055 5.21938L11.9999 11.4397L18.2193 5.21938C18.36 5.07865 18.5509 4.99959 18.7499 4.99959C18.949 4.99959 19.1398 5.07865 19.2806 5.21938C19.4213 5.36011 19.5003 5.55098 19.5003 5.75001C19.5003 5.94903 19.4213 6.1399 19.2806 6.28063L13.0602 12.5L19.2806 18.7194Z" fill="white" />
    </svg>
  )
}

const SvgT = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13 2.25H3C2.73478 2.25 2.48043 2.35536 2.29289 2.54289C2.10536 2.73043 2 2.98478 2 3.25V13.25C2 13.5152 2.10536 13.7696 2.29289 13.9571C2.48043 14.1446 2.73478 14.25 3 14.25H13C13.2652 14.25 13.5196 14.1446 13.7071 13.9571C13.8946 13.7696 14 13.5152 14 13.25V3.25C14 2.98478 13.8946 2.73043 13.7071 2.54289C13.5196 2.35536 13.2652 2.25 13 2.25ZM11.5 6.25C11.5 6.38261 11.4473 6.50979 11.3536 6.60355C11.2598 6.69732 11.1326 6.75 11 6.75C10.8674 6.75 10.7402 6.69732 10.6464 6.60355C10.5527 6.50979 10.5 6.38261 10.5 6.25V5.75H8.5V11.25H9.5C9.63261 11.25 9.75979 11.3027 9.85355 11.3964C9.94732 11.4902 10 11.6174 10 11.75C10 11.8826 9.94732 12.0098 9.85355 12.1036C9.75979 12.1973 9.63261 12.25 9.5 12.25H6.5C6.36739 12.25 6.24021 12.1973 6.14645 12.1036C6.05268 12.0098 6 11.8826 6 11.75C6 11.6174 6.05268 11.4902 6.14645 11.3964C6.24021 11.3027 6.36739 11.25 6.5 11.25H7.5V5.75H5.5V6.25C5.5 6.38261 5.44732 6.50979 5.35355 6.60355C5.25979 6.69732 5.13261 6.75 5 6.75C4.86739 6.75 4.74021 6.69732 4.64645 6.60355C4.55268 6.50979 4.5 6.38261 4.5 6.25V5.25C4.5 5.11739 4.55268 4.99021 4.64645 4.89645C4.74021 4.80268 4.86739 4.75 5 4.75H11C11.1326 4.75 11.2598 4.80268 11.3536 4.89645C11.4473 4.99021 11.5 5.11739 11.5 5.25V6.25Z" fill="black" />
    </svg>
  )
}
export default ResultContent