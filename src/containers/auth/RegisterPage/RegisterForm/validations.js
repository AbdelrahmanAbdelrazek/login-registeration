const validate = values => {
    const errors = {};
    if(values.password !== values.confirmPassword){
        errors.confirmPassword = "Passwords do not match!";
    }
    return errors;
}

export default validate;