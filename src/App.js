import { useState } from 'react';

function App() {
  const [showImage, setShowImage] = useState(false);
  return (
    <div style={{ textAlign: "center"}}>
        <h1> Don't you dare click on this. </h1>
        <button onClick={() => setShowImage(!showImage)}>
          {showImage ? "You actually dared" : "I dare you"}
        </button>
    </div>
  );
}
export default App;