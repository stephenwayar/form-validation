import React from "react";
import { useState } from "react/cjs/react.development";
import useForm from "../../hooks/useForm";
import validate from "../../services/validateInfo"
import "../../styles/form.css"

const FormSignup = ({submitForm}) => {

  const {
    handleChange, 
    handleSubmit, 
    values, 
    errors
  } = useForm(submitForm, validate)

  return(
    <div className="form-content-right">

      <form onSubmit={handleSubmit} className="form">
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
            value={values.username}
            onChange={handleChange}
          />
          {errors.username ? <p>{errors.username}</p> : null}
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
            value={values.email}
            onChange={handleChange}
          />
          {errors.email ? <p>{errors.email}</p> : null}
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
            value={values.password}
            onChange={handleChange}
          />
          {errors.password ? <p>{errors.password}</p> : null}
        </div>

        <div className="form-inputs"> 
          <label htmlFor="confirmPassword" className="form-label">
            Confrim Password
          </label>
          <input 
            id="confirmPassword"
            name="confirmPassword"
            type="password" 
            className="form-input" 
            placeholder="Confirm password" 
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword ? <p>{errors.confirmPassword}</p> : null}
        </div>
        <button onSubmit={handleSubmit} className="form-input-btn" type="submit">Sign Up</button>
        <span className="form-input-login">Already have an account? Login <a href="#">here</a></span>
      </form>

    </div>
  )
}
export default FormSignup