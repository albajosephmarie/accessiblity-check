import xclose from "../assets/xclose.svg";
import ph_text_t_fill from "../assets/ph_text_t_fill.svg";
import scoreX from "../assets/scoreX.svg";

const Section = (props) => {
  return (
    <div className="Section">
      <div className="SectionTextAndSupportingText">
        <div className="SectionText">Button 2</div>
        <div className="SectionSupportingText"></div>
      </div>
      {props.children}
    </div>
  );
};

const PanelFooter = () => {
  return (
    <div className="PanelFooter">
      <div className="Content">
        <div className="Actions">
          <div className="ButtonCancel">
            <div className="TextPadding">
              <span className="Text">
                Cancel
              </span>
            </div>
          </div>
          <div className="ButtonDownloadReport">
            <div className="TextPadding">
              <div className="Text">
                Download Report
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const ReportFrame = () => {
  return (
    <div className="ReportFrame">
      <div className="AvatarWrap">
        <div className="Avatar">
          <div className="ContrastBorder">
            <div className="ContrastText">1</div>
          </div>
        </div>
        <div className="Connector"></div>
      </div>
      <div className="Content">
        <div className="CheckTile">
          <div className="ColorWrap">
            <div className="Color">
              <div className="ContrastLevel">
                <div className="Number">
                  <div className="Number1">-43.8</div>
                  <div className="Number2">2.03:1</div>
                </div>
                <div className="Score">
                  <div className="Score1">
                    <img src={scoreX} className="ScoreX" alt="ScoreX" />
                    <div className="ScoreText">aa</div>
                  </div>
                  <div className="Score2">
                    <img src={scoreX} className="ScoreX" alt="ScoreX" />
                    <div className="ScoreText">AA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Content">
            <div className="BGColor">
              <div className="BGName">BG</div>
              <div className="BGCode">#58BFFF</div>
            </div>
            <div className="FGColor">
              <div className="FG">
                <img src={ph_text_t_fill} className="FGName" alt="ForeGround" />
              </div>
              <div className="FGCode">#FFFFFF</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReportHeader = () => {
  return (
    <div className="ReportHeader">
      <div className="Content">
        <div className="Logomark">
          <div className="Vector">
          </div>
        </div>
        <div className="TextAndSupportingText">
          <span className="Text">
            Review Results
          </span>
          <span className="SupportingText">
            Your accessibility scan is complete—here's what we found!
          </span>
        </div>

      </div>
      <div className="ButtonClose">
        <img src={xclose} alt="x-close" />
      </div>
    </div>
  )
}

const UrlReport = () => {
  return (
    <div className="UrlReport">
      <div className="Image"></div>
      <div className="SlideOutMenu">
        <div className="Panel">
          <ReportHeader />
          <div className="InputField">
            <div className="InputWithLabel">
              <div className="Input">
                <div className="InputContext">
                  <div className="InputText">www.websitesample.com</div>
                </div>
                {/* <div className="HelpIcon"></div> */}
              </div>
            </div>
            <div className="Hint"></div>
          </div>
          <div className="PanelContent">
            <Section>
              <ReportFrame />
            </Section>
          </div>
          <PanelFooter />
        </div>
      </div>
    </div>
  );
};
export default UrlReport;
