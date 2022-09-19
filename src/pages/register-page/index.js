import "./style.css";
import img1 from "../login-page/img/images.png";
export let registerPage = /*html*/ `<div class="container1">
<div>
  <img src="${img1}" alt="" class="img1" />
  <h1>Create new account</h1>
</div>
<div id="server-error-message"></div>
<div id="server-success-message"></div>


<form action="" class="form" id="register-form">
  <div class="font1">First Name</div>
  <input
    type="text"
    name="firstname"
    
    class="input1"
    placeholder="Please enter your first name"
  />
  <div id="name1"></div>
  <div class="font1">Last Name</div>
  <input
    type="text"
    name="lastname"
    
    class="input1"
    placeholder="Please enter your last name"
  />
  <div id="name2"></div>
  <div class="font1">Email Address</div>
  <input
    type="email"
    name="email1"
    
    class="input1"
    placeholder="Please enter your email"
  />
  <div id="email1"></div>
  <div class="font1">Password</div>
  <input
    type="password"
    class="input1"
    name="password1"
    
    placeholder="Please enter your password"
  />
  <div id="password1"></div>

  <div class="font1">Confirm Password</div>
  <input type="password" class="input1" placeholder="Confirm password" name="password2"/>
  <div id="password2"></div>
  <button class="button1">Register</button>
</form>
<div><div class="ahaa" id="login-page">Already have an account? Login here</div></div>
</div>`;
