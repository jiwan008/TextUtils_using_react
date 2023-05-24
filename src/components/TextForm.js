import React, {useState} from 'react'

export default function TextForm(props) {



    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleCopy = () => {
       let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");

    }



    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
    <h1> {props.heading} </h1>
        <div class="mb-3">
        
        <textarea className="form-control" id="myBox" value={text} rows="8"  onChange={handleOnChange}></textarea>
        </div>

        <button className="btn btn-primary mx-1"  onClick={handleUpClick} >Convert to Uppercase</button> 
        <button className="btn btn-primary mx-1"  onClick={handleLoClick} >Convert to Lowercase</button> 
        <button className="btn btn-primary mx-1"  onClick={handleClearClick} >Clear</button> 
        <button className="btn btn-primary mx-1"  onClick={handleCopy} >Copy Text</button> 
        <button className="btn btn-primary mx-1"  onClick={handleExtraSpaces} >Remove Extra Spaces </button> 
    </div>

    <div className="container my-3">
    <h2> Your text summary</h2>
    <p> {text.split(' ').length}, {text.length} characters</p>
    <p> {0.008 * text.split(' ').length} Minutes read</p>
    <h2> Preview </h2>

    <p> {text.length > 0 ? text : "Enter something to preview it here"} </p>

    </div>

    </>
  )
}

