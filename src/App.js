import logo from './ok-cat.gif';
import { useState } from 'react';

function App() {
  const [showImage, setShowImage] = useState(false);
  return (
    <div style={{ textAlign: "center"}}>
        <h1> Don't you dare click on this. </h1>
        <button onClick={() => setShowImage(!showImage)}>
          {showImage ? "You actually dared" : "I dare you"}
        </button>
        {showImage && (
          <div>
            <img src={logo} alt="the coolest cat" width="500"></img>
            <h1>Damn you are cool</h1>
          </div>
        )}
        
    </div>
  );
}
export default App;