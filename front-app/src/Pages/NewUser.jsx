import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./NewUser.css";

function NewUser() {
  const urlUser = "http://localhost:9095/users";

  const navigateHook = useNavigate();

  const [FNameInput, setFNameinput] = useState();
  const onFNameHandler = (event) => {
    setFNameinput(event.target.value);
  };

  const [LNameInput, setLNameInput] = useState();
  const onLNameHanlder = (event) => {
    setLNameInput(event.target.value);
  };

  const [email, setEmail] = useState();
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState();
  const onPhoneHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const onSubmitbuttonHandler = () => {
    const canSubmitNewUser = new Boolean(true);

    if (FNameInput === undefined) {
      alert("The first name value is incorrect/empty!");
      canSubmitNewUser = false;
    }
    if (LNameInput === undefined) {
      alert("The last name value is incorrect/empty!");
      canSubmitNewUser = false;
    }
    if (phoneNumber === undefined) {
      alert("The phone number value is incorrect/empty!");
      canSubmitNewUser = false;
    }
    if (email === undefined) {
      alert("The email value is incorrect/empty!");
      canSubmitNewUser = false;
    }

    if (canSubmitNewUser) {
      const newUser = {
        firstName: FNameInput,
        lastName: LNameInput,
        phoneNumber: phoneNumber,
        email: email,
      };

      axios
        .post(urlUser, newUser)
        .then((response) => {
          console.log(response);
          navigateHook("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const onBackButtonHandler = () => {
    navigateHook("/");
  };

  return (
    <form className="form__back">
      <div className="form">
        <h1 className="form__title">Create a new User</h1>
        <input
          placeholder="First name"
          onChange={onFNameHandler}
          className="input"
        ></input>
        <input
          placeholder="Last name"
          onChange={onLNameHanlder}
          className="input"
        ></input>
        <input
          placeholder="Email"
          onChange={onEmailHandler}
          className="input"
        ></input>
        <input
          placeholder="Phone Number"
          onChange={onPhoneHandler}
          className="input"
        ></input>
        <div className="form__buttonsrow">
          <button onClick={onSubmitbuttonHandler} className="submit">
            Create user
          </button>
        </div>
      </div>
      <button onClick={onBackButtonHandler} className="submit">
        Go back
      </button>
    </form>
  );
}
export default NewUser;
