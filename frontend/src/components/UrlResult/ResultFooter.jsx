import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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
    <button className="result-footer-cancel-button" onClick={() => handleClick()}>
      <span className="result-footer-cancel-text">Cancel</span>
    </button>
  )
}

const ResultDownloadButton = () => {
  const captureScreen = async () => {
    const canvas = await html2canvas(window.document.documentElement);
    const imgData = canvas.toDataURL('image/png');

    // Calculate the dimensions of the canvas in mm at 96 DPI
    const canvasWidthInMm = canvas.width * 25.4 / 96; // 96 pixels = 1 inch = 25.4 mm
    const canvasHeightInMm = canvas.height * 25.4 / 96;

    // Create a new PDF with dimensions that match the canvas
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [canvasWidthInMm, canvasHeightInMm]
    });

    // Add the image to the PDF, scaling it to fit the page
    pdf.addImage(imgData, 'PNG', 0, 0, canvasWidthInMm, canvasHeightInMm);
    alert('Download Accessibilty Report')
    pdf.save("download.pdf");
  }
  const handleClick = async () => {
    console.log('capture')
    await captureScreen()
    console.log('click exit')
  }
  return (
    <button className="result-footer-download-button" onClick={() => handleClick()}>
      <span className="result-footer-download-text">Download Report</span>
    </button>
  )
}
export default ResultFooter