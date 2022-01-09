export default function ValidateInfo(values) {

  let errors = {}

  //Username

  if(!values.username.trim()){
    errors.username = "Username required"
  }

  //Email

  if(!values.email){
    errors.email = "Email required"
  }
  else if(!/\S+@\S+\.\S+/.test(values.email)){
    errors.email = 'Email address is invalid';
  }

  //Password

  if(!values.password){
    errors.password = "Password required"
  }
  else if(values.password.length < 6){
    errors.password = "Password needs to be 6 characters or more"
  }

  // Confirm Password

  if(!values.confirmPassword){
    errors.confirmPassword = "Password required"
  }
  else if (values.confirmPassword !== values.password){
    errors.confirmPassword = "Passwords do not match"
  }

  return errors 
}