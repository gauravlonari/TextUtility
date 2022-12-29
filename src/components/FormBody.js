import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReplaceDialog from './ReplaceDialog';
import { Modal } from 'bootstrap'

export default function FormBody(props) {

  document.title="Home : TextUtility";
  const [mainText,setMainText]=useState('');
  let myModal =null;
  const [lastChange,setLastChange]=useState(null);
  
  const addHistory=(msg)=>{
    if(lastChange===msg)
      return;
    let el=document.createElement('li');
    el.classList.add("mb-2");
    el.appendChild(document.createTextNode(msg));
    document.getElementById("historyList").appendChild(el);
    setLastChange(msg);
  }
  const handleToUpper=() => {
    if(mainText.length<1){
      props.showAlert("danger","Empty Text");
      return;
    }
    setMainText(mainText.toUpperCase());
    props.showAlert("success","Converted to uppercase");
    addHistory("Upper Case: ["+mainText.toUpperCase()+"]");
  }
  const handleClearText=() => {
    if(mainText.length<1){
      props.showAlert("danger","Text Already Clear");
      return;
    }
    setMainText("");
    props.showAlert("success","Text Cleared");
    addHistory("Clear Text: ["+mainText+"]");
}
const handleOnChange=(event)=>{
  setMainText(event.target.value);
}
const handleToLower=()=>{
  if(mainText.length<1){
    props.showAlert("danger","Empty Text");
    return;
  }
  setMainText(mainText.toLowerCase());
  props.showAlert("success","Converted to Lowercase");
  addHistory("Lower Case: ["+mainText.toLowerCase()+"]");
  }
  
  const handleExtraSpaces=()=>{
    if(mainText.length<1){
      props.showAlert("danger","Empty Text");
      return;
    }
    let tempText;
    tempText=mainText.replace(/\s+/g, ' ').trim();
    if(mainText!==tempText){
      props.showAlert("success","Removed Extra Whitespaces");
      addHistory("Remove Extra Spaces: ["+mainText.replace(/\s+/g, ' ').trim()+"]");
      setMainText(tempText);
    }
    else{
      props.showAlert("info","No Changes");
    }
  }
  const handleReplace=()=>{
    if(mainText.length<1){
      props.showAlert("danger","Empty Text");
      return;
    }
    if(myModal===null){
      myModal= new Modal(document.getElementById('replaceTextModal'));
    }
    myModal.show();
  }
  
  const handleAlternate=()=>{
    if(mainText.length<1){
      props.showAlert("danger","Empty Text");
      return;
    }
    let tempText=mainText.split('').map((c,i) => i % 2 !== 0 ? c.toLowerCase() : c.toUpperCase()).join('');   
    setMainText(tempText);
    props.showAlert("success","Altered the case");
    addHistory("Alter Case: ["+tempText+"]");
  }
  
  const handleOpposite=()=>{
    if(mainText.length<1){
      props.showAlert("danger","Empty Text");
      return;
    }
    let tempText = mainText.split("").map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join("");
    setMainText(tempText);
    props.showAlert("success","Opposite the case");
    addHistory("Opposite Case: ["+tempText+"]");
  }
  const handleToSentence=()=>{
    if(mainText.length<1){
      props.showAlert("danger","Empty Text");
      return;
    }
    
    let tempText = mainText.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,(c)=>{return c.toUpperCase()});
    setMainText(tempText);
    props.showAlert("success","Converted to sentence case");
    addHistory("Sentence Case: ["+tempText+"]");
  }
  
  return (
    <>
    <ReplaceDialog mainText={mainText} setMainText={setMainText} addHistory={addHistory} theme={props.theme}></ReplaceDialog>
    <div className="container mt-4">
    <div className="mb-3">
        <h4><label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label></h4>
        <textarea className="form-control" style={props.theme} onChange={handleOnChange} value={mainText} id="exampleFormControlTextarea1" rows={props.row} placeholder={props.placeholder}></textarea>
    </div>
    <div className="container d-flex mt-3 align-items-center justify-content-center flex-wrap">
        <button className="btn btn-success m-2" onClick={handleToUpper}>Convert to UpperCase</button>    
        <button className="btn btn-success m-2" onClick={handleToLower}>Convert to LowerCase</button>    
        <button className="btn btn-success m-2" onClick={handleToSentence}>Convert to Sentence Case</button>    
        <button className="btn btn-success m-2" onClick={handleAlternate}>Alternate Case</button>    
        <button className="btn btn-success m-2" onClick={handleOpposite}>Opposite Case</button>    
        <button className="btn btn-success m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>    
        <button className="btn btn-success m-2" onClick={handleReplace}>Replace Text</button>    
        <button className="btn btn-success m-2" onClick={handleClearText}>Clear Text</button>    
    </div>
    <hr></hr>
    <div className="mt-3">
        <h4>Summary</h4>  
        <p>{mainText.trim() === '' ? 0 : mainText.match(/\S+/g).length} words {mainText.length} character</p>  
    </div>
    <div className="mt-3">
        <h4>Preview</h4>
        <p className='container text-break'>{mainText.length<1? "Enter something in textbox above to preview here" : mainText}</p>        
    </div>
    <hr />    
    <div className="mt-3">
        <h4>History</h4>
        <ol className='list-group mx-4' id='historyList'>
        </ol>
    </div>
    <hr />
    </div> 
    </>
  )
}
FormBody.propTypes = {
    label: PropTypes.string.isRequired,
    row: PropTypes.number,
    placeholder: PropTypes.string,
    showAlert:PropTypes.func.isRequired
};
FormBody.defaultProps={
    row:3,
    showAlert: ()=>{console.log("Show Alert unavailable")}
};