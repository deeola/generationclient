function ValidateNote(values) {
    let errors = {};
  
    //Fetch passwords from local storage
  
    if (!values.message) {
      errors.username = "message cannot be empty";
    }
  
    return errors;
  }
  
  export default ValidateNote;