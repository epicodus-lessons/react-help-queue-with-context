import React from "react";
import { useTheme } from "../context/theme-context";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const [theme] = useTheme();

  const buttonStyles = { 
    backgroundColor: theme.buttonBackground, 
    color: theme.textColor, 
  }

  const inputStyles = { 
    backgroundColor: theme.inputBackground,
    color: theme.textColor, 
  }
  
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <label>Pair Names:
          <br/>
          <input
            style={inputStyles}
            type='text'
            name='names' />
        </label>
        <br/>
        <label>Location:
          <br/>
          <input
            style={inputStyles}
            type='text'
            name='location' />
        </label>
        <br/>
        <label>Describe your issue:
          <br/>
          <textarea
            style={inputStyles}
            name='issue' />
        </label>
        <br/>
        <button style={buttonStyles}  type='submit'>{props.buttonText}</button>
      </form>
      <hr/>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;