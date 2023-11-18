import React, { useState } from 'react';



export default function TextForm(prop) {
  const [text,setText] = useState("Enter text her");
  const handleUpClick=()=>{
    console.log("Click on Upclick" + text);
    let newText = text.toUpperCase();
    setText(newText);

  }
  const handleOnChange=(event)=>{
    setText("You have on clicked handleon change");
    setText(event.target.value);
  }
  return (
    <div>
        <h1>{prop.heading}</h1>
        <div className="form-group mb-3">
       
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
