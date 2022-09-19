import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { renderErrorMessage, setActiveScreen } from "../view";

export let createNewUser = (firstname, lastname, email1, password1) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
      // Hiển thị ra là đăng kí thành công
      renderErrorMessage("server-error-message", "");
      renderErrorMessage("server-success-message", "Successful");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode.errorMessage);
      renderErrorMessage("server-success-message", "");

      renderErrorMessage("server-error-message", errorMessage);
    });
};

export let signIn = (email, password) => {
  const auth = getAuth();
  // const loginEmail = email.value;
  // const loginPassword = password.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user;
      console.log(user);
      renderErrorMessage("login-notifi", "Successful");
      setActiveScreen("chatPage");

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      renderErrorMessage("login-notifi", error.message);
    });
};
