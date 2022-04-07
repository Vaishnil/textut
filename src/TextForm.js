
import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked " + text);
        let newText =text.toUpperCase();
        setText(newText )
        props.showalerts("Text convertes to Uppercase ","success")

    }
    const handleloClick =()=>{
        console.log("Uppercase was clicked " + text);
        let newText =text.toLowerCase();
        setText(newText )
        props.showalerts("Text convertes to lowercase ","success")
    }
    const handleclearClick =()=>{
        console.log("Uppercase was clicked " + text);
        let newText ='';
        setText(newText )
        props.showalerts("Text has been clear ","success")
    }
    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text , setText] = useState('');
  
   
  return (
      <>
 <div className="container" style={{color:props.mode==='dark'?'white':'rgb(8 36 78)' }}>

<h1 >{props.heading}</h1>
<div className="mb-3 ">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'rgb(8 36 78)' }} id="mybox" rows="8"></textarea>
</div>
<button className='btn btn-primary'onClick={handleUpClick} > Convert to unppercase</button>
<button  className='btn btn-primary mx-5'onClick={handleloClick} > Convert to lowercase</button>
<button  className='btn btn-primary 'onClick={handleclearClick} > clear Text</button>

 </div>
 <div className="container my-3" style={{color:props.mode==='dark'?'white':'rgb(8 36 78)' }}>
     <h1>your Text summary</h1>
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <h2>Preview</h2>
     <p>{text}</p>
 </div>
   </>
  )
}
