import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Alert from './Alert';

export default function ReplaceDialog(props) {

    const [findText,setFindText]=useState("");
    const [replaceText,setReplaceText]=useState("");

    const [alert,setAlert]=useState(null);
    const showAlert=(type,msg)=>{
      setAlert({msg:msg,type:type});
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    }
    
    const handleTextReplace=()=>{
        if(findText!==""){
            if(props.mainText.includes(findText)){
                props.setMainText(props.mainText.replace(findText,replaceText));
                showAlert("success","Text Replaced");
                props.addHistory("Text Replaced: ("+findText+","+replaceText+") ["+props.mainText+"]");
            }
            else{
                showAlert("danger","The text to find is not found");
            }
        }
        else{
            showAlert("danger","Enter the text to find");
        }
    }

    const onFindChange=(e)=>{
        setFindText(e.target.value);
    }
    const onReplaceChange=(e)=>{
        setReplaceText(e.target.value);
    }
  return (
    <>
        <div className="modal fade modal-lg" id="replaceTextModal" tabIndex="-1" aria-labelledby="replaceTextModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered"> 
            <div className="modal-content" style={props.theme}>
            <div className="modal-header">
                <h5 className="modal-title" id="replaceTextModalLabel">Replace Text Dialog</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Find</span>
                    <input type="text" className="form-control" placeholder="Enter text to find" aria-describedby="basic-addon1" value={findText} onChange={onFindChange}  style={props.theme}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Replace</span>
                    <input type="text" className="form-control" placeholder="Enter text to replace" aria-describedby="basic-addon1" value={replaceText} onChange={onReplaceChange}  style={props.theme}/>
                </div>
                <Alert alert={alert}></Alert>
                <hr/>   
                <div className="mt-0 mb-3 mx-3">
                    <h5 className="modal-title mt-0 mb-2">Your Text:</h5>
                    <div className="container text-break">{props.mainText}</div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleTextReplace}>Replace</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
ReplaceDialog.propTypes={
    mainText:PropTypes.string.isRequired,
    setMainText:PropTypes.func.isRequired,
    addHistory:PropTypes.func.isRequired,
    theme:PropTypes.object.isRequired,
};