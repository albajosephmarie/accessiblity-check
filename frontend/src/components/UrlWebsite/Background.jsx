import "./Background.css";

const Background = () => {
  return (
    <div className="background">
      <BackgroundContent />
    </div>
  );
}

const BackgroundContent = () => {
  return (
    <div className='background-content'>
      <div className="background-line1 background-line"></div>
      <div className="background-line2 background-line"></div>
      <div className="background-line3 background-line"></div>
      <div className="background-line4 background-line"></div>
      <div className="background-line5 background-line"></div>
      <div className="background-line6 background-line"></div>
      <div className="background-line7 background-line"></div>
      <div className="background-line8 background-line"></div>
    </div>
  )
}

export default Background;
