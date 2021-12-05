function ValidateSearch(values) {
  let errors = {};

  //Fetch passwords from local storage

  if (!values.name) {
    errors.name = "name cannot be empty";
  }

  if (!values.date) {
    errors.date = "date cannot be empty";
  }

  return errors;
}

export default ValidateSearch;
