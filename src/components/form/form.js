import React, {useState} from "react";
import FormSignup from "../formSignup/formSignup";
import FormSucess from "../formSuccess/formSuccess";
import "../../styles/form.css"
import img2 from "../../assests/images/img-2.svg"

const Form = ({}) => {

  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm(){
    setIsSubmitted(true)
  }
  return(
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={img2} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSucess />
        )}
      </div>
    </>
  )
}
export default Form