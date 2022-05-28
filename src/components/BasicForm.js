import React, { useState, useRef } from "react";

const BasicForm = (props) => {
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isFirstNameTouched, setIsFirstNameTouched] = useState(false);
  const firstNameRef = useRef("");

  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isLastNameTouched, setIsLastNameTouched] = useState(false);
  const lastNameRef = useRef("");

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const emailRef = useRef("");

  const firstNameBlurHandler = () => {
    setIsFirstNameTouched(true);
    const isValueValid = firstNameRef.current.value.trim() !== "";
    if (isValueValid) {
      setIsFirstNameValid(true);
      return;
    }
    setIsFirstNameValid(false);
  };

  const lastNameBlurHandler = () => {
    setIsLastNameTouched(true);
    const isValueValid = lastNameRef.current.value.trim() !== "";
    if (isValueValid) {
      setIsLastNameValid(true);
      return;
    }
    setIsLastNameValid(false);
  };

  const emailBlurHandler = () => {
    setIsEmailTouched(true);
    const isValueValid = emailRef.current.value.trim().includes("@");
    if (isValueValid) {
      setIsEmailValid(true);
      return;
    }
    setIsEmailValid(false);
  };

  const firstNameInvalid = isFirstNameTouched && !isFirstNameValid;
  const firstNameClasses = firstNameInvalid
    ? "form-control invalid"
    : "form-control";

  const lastNameInvalid = isLastNameTouched && !isLastNameValid;
  const lastNameClasses = lastNameInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInvalid = isEmailTouched && !isEmailValid;
  const emailClasses = emailInvalid ? "form-control invalid" : "form-control";

  const formIsValid = isFirstNameValid && isLastNameValid && isEmailValid;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    setIsFirstNameTouched(false);
    setIsLastNameTouched(false);
    setIsEmailTouched(false);

    setIsFirstNameValid(false);
    setIsLastNameValid(false);
    setIsEmailValid(false);

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            ref={firstNameRef}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInvalid && (
            <p className="error-text">First Name must not be empty!</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            ref={lastNameRef}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInvalid && (
            <p className="error-text">Last Name must not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" ref={emailRef} onBlur={emailBlurHandler} />
        {emailInvalid && (
          <p className="error-text">Email must include '@' or not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
