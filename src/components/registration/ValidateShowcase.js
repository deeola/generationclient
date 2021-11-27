function ValidateShowcase(values) {
  let errors = {};

  if (!values.firstname) {
    errors.firstname = "first name cannot be empty";
  }
  if (!values.lastname) {
    errors.lastname = "last name cannot be empty";
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = "year of birth cannot be empty";
  }
  if (!values.dateofDeath) {
    errors.dateofDeath = "year of death cannot be empty";
  }
  if (!values.profileMessage) {
    errors.profileMessage = "Summary cannot be empty";
  }
  if (!values.longMessage) {
    errors.longMessage = "Long Message cannot be empty";
  }
  

  return errors;
}

export default ValidateShowcase;
