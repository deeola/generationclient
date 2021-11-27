function ValidateSign(values) {
    let errors = {};
  
    //Fetch passwords from local storage
  
    if (!values.username) {
      errors.username = "username cannot be empty";
    }
  
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  
    if (!values.password) {
      errors.password = "password cannot be empty";
    }
  
    if (!values.password2) {
      errors.password2 = "pasword cannot be empty";
    } else if (values.password2 !== values.password) {
      errors.password2 = "password does not match";
    }
  
    return errors;
  }
  
  export default ValidateSign;