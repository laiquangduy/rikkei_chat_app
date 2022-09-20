import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  alertSuccess,
  renderErrorMessage,
  setActiveScreen,
  loadingRun,
} from "../view";

export let createNewUser = (firstname, lastname, email1, password1) => {
  loadingRun(true);
  const auth = getAuth();

  console.log("Hello world");
  createUserWithEmailAndPassword(auth, email1, password1)
    // .then(() => {
    //   loadingRun("loading", "on");
    // })

    .then((userCredential) => {
      
      console.log(userCredential);
      const user = userCredential.user;
      // Hiển thị ra là đăng kí thành công
      renderErrorMessage("server-error-message", "");
      // renderErrorMessage("server-success-message", "Successful");
      return updateProfile(auth.currentUser, {
        displayName: firstname + " " + lastname,
      });
    })
    .then(() => {
      return sendEmailVerification(auth.currentUser);
    })
    .then(()=>{
      return loadingRun(false);
    })
    .then(() => {
      
      return alertSuccess("Đăng kí thành công");
    })
    .then(() => {
      setActiveScreen("loginPage");
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
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (!user.emailVerified) {
        renderErrorMessage(
          "server-error-message",
          "Please verify your email address"
        );
      } else {
        setActiveScreen("chatPage");
      }
      // console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(111111);
      renderErrorMessage("server-error-message", errorMessage);
    });
};

export let resetPassword = (email) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      return alertSuccess("Gửi mail thành công");
    })
    .then(() => {
      renderErrorMessage("server-error-message", "");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      renderErrorMessage("server-error-message", errorMessage);
    });
};
