import { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [screenshot, setScreenshot] = useState('');

  const handleCapture = async () => {
    try {
      const response = await fetch('/api/screen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to capture screenshot');
      }

      const data = await response.json();
      setScreenshot(data.image);
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <button onClick={handleCapture}>Capture Screenshot</button>
      {screenshot && <img src={`data:image/jpeg;base64,${screenshot}`} alt="Screenshot" />}
    </div>
  );
}

export default App;
