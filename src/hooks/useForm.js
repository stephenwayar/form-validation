import { useState, useEffect, useCallback } from "react";

const useForm = (callback, validate) => {

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [errors, setErros] = useState({})

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {

    const {name, value} = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErros(validate(values))
    setIsSubmitting(true)
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){
      callback()
    }
  }, [errors])

  return {handleChange, handleSubmit, values, errors}
}
export default useForm