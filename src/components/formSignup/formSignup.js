import React from "react";

const FormSignup = () => {
  return(
    <div>
      <div className="form-content-right">

        <form className="form">
          <h1>Get started with us today! Create your account by filling out the information below.</h1>

          <div className="form-inputs"> 
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input 
              id="username"
              name="username"
              type="text" 
              className="form-input" 
              placeholder="Enter your username" 
            />
          </div>

          <div className="form-inputs"> 
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input 
              id="email"
              name="email"
              type="email" 
              className="form-input" 
              placeholder="Enter your email" 
            />
          </div>

          <div className="form-inputs"> 
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input 
              id="password"
              name="password"
              type="password" 
              className="form-input" 
              placeholder="Enter your password" 
            />
          </div>

          <div className="form-inputs"> 
            <label htmlFor="confirm-password" className="form-label">
              Confrim Password
            </label>
            <input 
              id="confirm-password"
              name="confirm-password"
              type="password" 
              className="form-input" 
              placeholder="Confirm password" 
            />
          </div>
          <button className="form-input-btn" type="submit">Sign Up</button>
          <span className="form-input-login">Already have an account? Login <a href="#">here</a></span>
        </form>

      </div>
    </div>
  )
}
export default FormSignup