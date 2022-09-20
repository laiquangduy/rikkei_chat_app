import "./style.css";
import img from "./img/images.png";
export let loginPage = /*html*/ `<div class="container">
<div class="container-2">
  <img src=${img} alt="" class="img-login" />
  <h1>Sign in to Rikkei Chat</h1>
  
</div>


<form action="" id="login-form">
<div><div class="font">Email address</div></div>
<input type="email" name="email" placeholder="Please enter your email" class="input1" />
<div id ="email-error-message"></div>

  
  <div>
  <div class="font">Password</div></div>
  <input
    type="password"
    placeholder="Please enter your password"
    name="password"
    class="input1"
    id=""
  />
  <div id ="password-error-message"></div>
  
  <button class="button">Login</button>
  
</form>
<div id="server-error-message"></div>
<div id="create-user" class="create" >New to Rikkei Chat? Create an account</div>
<div class="forget" >
  <div class="forget-1"id="forget-user">Forget Your Password? Click here</div>
</div>
</div>`;
