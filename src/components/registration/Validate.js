function Validate(signValues) {
    let errors = {};
  
    //
  
    if (!signValues.email) {
      errors.email= "email cannot be empty";
    } 
  
    if (!signValues.password) {
      errors.password = "password cannot be empty";
    } 
  
    return errors;
  }
  
  export default Validate;