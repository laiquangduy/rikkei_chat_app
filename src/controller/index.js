// import { resetPassword } from "../pages/reset-password-page"
import { renderErrorMessage } from "../view";
// import {createNewUser, loginUser} from
// import {createNewUser, loginUser} from
import { createNewUser } from "../model";
import { signInWithEmailAndPassword } from "../model";

export let validateLoginInfo = (email, password) => {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }

  if (!password) {
    renderErrorMessage("password-error-message", "Please enter your password");
  } else {
    renderErrorMessage("password-error-message", "");
  }
};

export let validateRegisterPage = (
  firstname,
  lastname,
  email1,
  password1,
  password2
) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!firstname) {
    renderErrorMessage("name1", "Please enter your name");
  } else {
    renderErrorMessage("name1", "");
  }
  if (!lastname) {
    renderErrorMessage("name2", "Please enter your name");
  } else {
    renderErrorMessage("name2", "");
  }
  if (!email1) {
    renderErrorMessage("email1", "Please enter your email");
  } else if (!emailRegex.test(email1)) {
    renderErrorMessage("email1", "Invalid email");
  } else {
    renderErrorMessage("email1", "");
  }

  if (!password1) {
    renderErrorMessage("password1", "Please enter your password");
  } else {
    renderErrorMessage("password1", "");
  }
  if (!password2) {
    renderErrorMessage("password2", "Confirm your password");
  } else if (password2 !== password1) {
    renderErrorMessage("password2", "Password is not matched");
  } else {
    renderErrorMessage("password2", "");
  }
  if (
    firstname &&
    lastname &&
    email1 &&
    password1 &&
    password2 &&
    password2 === password1
  ) {
    createNewUser(firstname, lastname, email1, password1);
  }
};
export let validateResetPage = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("email5", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email5", "Invalid email");
  } else {
    renderErrorMessage("email5", "");
  }
};
