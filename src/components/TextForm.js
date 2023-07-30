import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // setText("You have clicked on handleUpClick")
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" converted to UpperCase ", "success ");
    }

    const handleLoClick = () => {
        // setText("You have clicked on handleUpClick")
        console.log("Lowercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" converted to LowerCase ", "success");
    }

    const handleClClick = () => {
        // setText("You have clicked on handleUpClick")
        console.log("ClearText was clicked " + text)
        let newText = ('');
        setText(newText)
        props.showAlert(" All texts are cleared ", "success");
    }


    const handleSpeak = () => {
        // setText("You have clicked on handleUpClick")
        console.log("SpeakText was clicked " + text)

        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText)
        // setText(newText)
    }

    const handleStop = () => {
        console.log("SpeakText was clicked " + text)
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.cancel(newText)
    }

    const handleRe=()=>{
        // setText("You have clicked on handleUpClick")
        console.log("ReverseText was clicked" + text)
        let newText = text;
        let reverse = newText.split('').reverse().join('');
        setText(reverse)
        props.showAlert(" All texts are converted reverse", "success");
    }

    const handleCopy = () => {
        console.log('Text Copied')
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" All texts are copied ", "success");
    }

    const handleRemove = () => {
        console.log('Space Removed')
        let newText = text.split(/[ ]+/);
        setText(newText.join(''));
        props.showAlert(" All extra Spaces Removed", "success");
    }


    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
            <div className='glass'  style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Text Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Text Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClClick}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleSpeak}>Speak</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleStop}>Speak/Stop</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleRe}>Reverse</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleRemove}>Remove Space</button>
            <div className='glass2 my-3' style={props.style}>
                <h2>Your Text Summary</h2>
                <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
                <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing Here"}</p>
            </div>
            </div>

        </>
    )
}
