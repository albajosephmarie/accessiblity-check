import xclose from '../assets/xclose.svg'

const Section = (props) => {
  return (
    <div className="Section">
      <div className="SectionTextAndSupportingText">
        <div className="SectionText">Button 2</div>
        <div className="SectionSupportingText"></div>
      </div>
      {props.children}
    </div>
  )
}

const ReportFrame = () => {
  return (
    <div className="ReportFrame">
      <div className="AvatarWrap">
        <div className="Avatar">
          <div className="ContrastBorder">
          <div className="AvatarText">1</div>
          </div>
        </div>
        <div className="Connector"></div>
      </div>
      <div className="Content">
        <h1>Hello</h1>
      </div>
    </div>

  )
}

const UrlReport = () => {
  return (
    <div className="UrlReport">
      <div className="Image">
      </div>
      <div className="SlideOutMenu">
        <div className="Panel">
          <header>
            <div className="Content">
              <div className="Logomark">
                <div className="Vector">

                </div>
              </div>
              <div className="TextAndSupportingText">
                <div className="Text">
                  Review Results
                </div>
                <div className="SupportingText">
                  Your accessibility scan is complete—here's what we found!
                </div>

              </div>

            </div>
            <button><img src={xclose} className="ButtonClose" alt="Button Close" /></button>
          </header>
          <div className="InputField">
            <div className="InputWithLabel">
              <div className="Input">
                <div className="InputContext">
                  <div className="InputText">
                    www.websitesample.com
                  </div>
                </div>
                <div className="HelpIcon"></div>
              </div>
            </div>
            <div className="Hint"></div>
          </div>
          <div className="PanelContent">
            <Section>
            <ReportFrame />
            </Section>
          </div>
        </div>
      </div>

    </div>
  )

}
export default UrlReport;