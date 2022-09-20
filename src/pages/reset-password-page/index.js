import "./style.css";
import img2 from "../login-page/img/images.png";
export let resetPassword = /*html*/ `<div class="container2">
<div>
  <img src="${img2}" alt="" class="img2" />
  <h1>Reset Password</h1>
</div>
<form action="" class="form" id="reset-form">
  <div class="font2">Email Address</div>
  <input
    type="email"
    placeholder="Please enter your email"
    class="input2"
    name ="email"
  />
  <div id ="email5"></div>
  <button class="button2">Reset Password</button>
  <div id="server-error-message"></div>
</form>
<div><div class="ahaa1" id="login-page-1">Already have an account? Login here</div></div>
</div>`;
