const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const emailRules = {
    required: true,
    pattern: {
        value: emailRegex,
        message: 'Please enter a valid email address.'
    }
};

export const signInPasswordRules = {
    required: true,
};

export const signUpPasswordRules = {
    required: true,
    pattern: {
        value: passwordRegex,
        message: 'Password must be at least 8 characters containing a number, a symbol, an uppercase, and a lowercase letter.'
    },
};

export const checkboxRoules = {
    required: true,
};

export const nameRules = {
    required: true,
    minLength: 2,
    maxLength: {
        value: 15,
        message: 'Name cannot be more than 15 characters.'
    },
};