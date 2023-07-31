import React, { useState } from 'react'

export default function TextForm(props) {
    const[text , setText]=useState("");
    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLoClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerrcase!","success")

    }
    const handleClearClick = ()=>{
        let newText= '';
        setText(newText)
        props.showAlert(" Text cleared!","success")

    }
    const handleCopy = ()=>{
        var text =document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard !","success")

    }
    const handleExtraSpaces = ()=>{
        // console.log("remove extra space")
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!","success")

    }
    const handleOnChange = (event)=>{
        console.log("handle on change") 
        setText(event.target.value)
    }
  return (
  <>
  <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>

   <h1>{props.heading}</h1>
     <div className="mb-3">
    <textarea
      className="form-control"value={text}
      id="mybox"
      rows={9}
      onChange={handleOnChange}
      style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}}
      ></textarea>
    </div>

  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
  </div>
  </>
  )
}
