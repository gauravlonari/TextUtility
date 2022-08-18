import React from "react";
import '../css/themes.css';
import PropTypes from 'prop-types'

export default function About(props) {
  document.title="About : TextUtility";
  return (
    <>
    <div className={`container theme-${props.theme.mode} my-4`}>
      <div className="accordion dark" id="accordionExample">
        <div className="accordion-item" style={props.theme}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={props.theme}
            >
              What is TextUtils?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Text Utility</strong> is a utility software used 
              to manipulate your text in the way you want. 
              Enter the text you want to change in the textarea and 
              the functions are available to you. Change the text in the way you want!
              These functions are available to work in offline mode. Observe the changes with step by step history.
            </div>
          </div>
        </div>
        <div className="accordion-item"  style={props.theme}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={props.theme}
            >
              Which Functions are available?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <ul className="list-group list-group-numbered">
              Following functions are available:
              <li className="list-group-item" style={props.theme}>Change case to UpperCase</li>
              <li className="list-group-item" style={props.theme}>Change case to LowerCase</li>
              <li className="list-group-item" style={props.theme}>Alternate Case</li>
              <li className="list-group-item" style={props.theme}>Opposite Case</li>
              <li className="list-group-item" style={props.theme}>Remove Extra Whitespaces</li>
              <li className="list-group-item" style={props.theme}>Find and Replace Text</li>
              <li className="list-group-item" style={props.theme}>Character Counter</li>
              <li className="list-group-item" style={props.theme}>Words Counter</li>
              <li className="list-group-item" style={props.theme}>More function are under construction..</li>
            </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.theme}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={props.theme}
            >
              Credits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This project is built by Gaurav Lonari.</strong> The original idea for this project is of <code>Code With Harry</code> mentioned in his youtube tutorial of React JS. This Project is made by use of <strong><code>NodeJS, ReactJS, NPM and Bootstrap </code> with the help of CODEWITHHARRY tutorials.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

About.propTypes={
  theme:PropTypes.object.isRequired,
}
