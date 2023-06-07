const validation = (userData) => {
    let errors = {};

    if (!userData.email ) {
        errors.email = 'Enter your email';
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
        errors.email = 'Invalid email';
    }
    if (userData.email.length > 35) {
        errors.email = 'Email cannot exceed 35 characters';
    }

    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'Password must be between 6 y 10 characters';
    }

    return errors;
}

export default validation;