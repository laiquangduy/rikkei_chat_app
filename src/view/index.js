import { loginPage } from "../pages/login-page/index";
import { registerPage } from "../pages/register-page/index";
import { resetPassword } from "../pages/reset-password-page/index";
import { chatPage } from "../pages/chat-page/index";
import { validateLoginInfo, validateRegisterPage } from "../controller/index";
import { validateResetPage } from "../controller/index";
import { signIn } from "../model";
import swal from "sweetalert";
export let alertSuccess = (message) => {
  return swal({
    title: "Thành công",
    text: message,
    icon: "success",
    button: "OK",
  });
};

export let setActiveScreen = (screenName) => {
  const app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginForm = document.getElementById("login-form");
      if (loginForm) {
        console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const email = loginForm.email.value;
          const password = loginForm.password.value;

          // Controller làm nhiệm vụ validate thông tin
          // Tạo hàm validateLoginInfo nhận vào email và password trong controller
          // Export hàm validateLoginInfo
          // Import hàm validateLoginInfo trong view
          // Trong Screen Login, gọi hàm validateLoginINfo() với email và pass lấy
          // từ form

          // Trong controller
          console.log(email, password);
          validateLoginInfo(email, password);
          signIn(email, password);
        });
      }
      const create = document.getElementById("create-user");
      create.onclick = function () {
        setActiveScreen("registerPage");
      };
      const forget = document.getElementById("forget-user");
      forget.onclick = function () {
        setActiveScreen("resetPassword");
      };
      break;
    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }
      // const loadingr = document.getElementById("loading");
      // loadingr.onclick = function () {
      //   loadingRun("loading", "on");
      // };
      const registerForm = document.getElementById("register-form");
      if (registerForm) {
        console.log(registerForm);
        registerForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const firstname = registerForm.firstname.value;
          const lastname = registerForm.lastname.value;
          const email1 = registerForm.email1.value;
          const password1 = registerForm.password1.value;
          const password2 = registerForm.password2.value;

          // console.log(firstname);
          // loadingRun("loading", "on");
          validateRegisterPage(
            firstname,
            lastname,
            email1,
            password1,
            password2
          );
        });
      }
      const login = document.getElementById("login-page");
      login.onclick = function () {
        setActiveScreen("loginPage");
      };

      break;
    case "resetPassword":
      if (app) {
        app.innerHTML = resetPassword;
      }
      const resetPasswordForm = document.getElementById("reset-form");
      if (resetPasswordForm) {
        resetPasswordForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = resetPasswordForm.email.value;

          validateResetPage(email);
        });
      }
      const login1 = document.getElementById("login-page-1");
      login1.onclick = function () {
        setActiveScreen("loginPage");
      };
      break;
    case "chatPage":
      if (app) {
        app.innerHTML = chatPage;
      }
      break;

    default:
      break;
  }
};
export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};

export let loadingRun = (text) => {
  const loadingIcon = document.getElementById("loading");
  if (text == true) {
    loadingIcon.style.display = "block";
  } else if (text == false) {
    loadingIcon.style.display = "none";
  }
};

// export let loading = (loading) => {
//   let loadingRun = document.getElementById("loading");
//   loadingRun.style.display = loading;
// };

// Git status (Kiểm tra trạng thái của file)
// (unstage) và Staging)
// git stage . (Đẩy file vừa được chỉnh sửa vào trạng thái staging)

// Git commit -m "Message"
// Đẩy file vào trạng thái commit trước khi được push lên remote repo

// Git push origin [tên nhánh](master)
// Đẩy file lên remote repo tại nhánh master
//
