import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState("400");
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrcode, setQrCode] = useState("");



  useEffect(()=> {
    setQrCode
 (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
  }
  return (
    <div className='QrGEN'>
      <h1>QR Code Generator</h1>
      <div className='input-box'>
        <div className='gen'>
          <input type='text' onChange={(e)=>{setTemp(e.target.value)}} placeholder='Enter text to encode'/>
          <button className='button' onClick={handleClick}>Generate</button>
        </div>
        <div className='extra'>
          <h5>Background Color:</h5>
          <input type='color' onChange={(e)=> {
            setBgColor(e.target.value.substring(1))}}/>
            <h5>Dimension:</h5>
            <input type='range' min="200" max="600" value={size} onChange={(e) =>{setSize(e.target.value)}}/>
        </div>
      </div>
      <div className='output-box'>
        <img src={qrcode} alt='' />
        <a href={qrcode} download="QRCode">
          <button type='button'>download</button>
        </a>
      </div>
    </div>
  );
  
}

export default App;
