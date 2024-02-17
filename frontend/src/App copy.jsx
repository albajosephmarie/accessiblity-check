import xclose from './assets/xclose.svg'

const App = () => {
  return (

    <div className="ReportScreen">
      <div className="ReportImage">
        <h1>ReportImage</h1>

      </div>
      <div className="SlideOutMenu">
        <div className="Panel">
          <div className="SlideOutMenuHeader">
            <div className="Content">
              <div className="Logomark">
                <div className="LogomarkVector"/>
                <div className="TextAndSupportingText">
                  <div className="Text">
                    Review Results
                  </div>
                  <div className="SupportingText">
                    Your accessibility scan is complete — here's what we found!
                  </div>

                </div>
              </div>
              <button className="ButtonClose">
                <img src={xclose} alt="X-close" />
              </button>
            </div>
          </div>
          <div className="InputField">
            <div className="InputFieldWithLabel">
              <div className="Input">
                <div className="InputContent">
                  www.cnn.com
                </div>
                <div className="HelpIcon">

                </div>

              </div>
            </div>
          </div>
          <div className="PanelContent">

          </div>
          <div className="Footer">
            <div className="FooterContent">
              
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default App;