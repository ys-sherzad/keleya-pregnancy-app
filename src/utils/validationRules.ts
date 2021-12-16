export const emailRules = {
    required: true,
    pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Please enter a valid email address.'
    }
};

export const signInPasswordRules = {
    required: true,
};

export const signUpPasswordRules = {
    required: true,
    pattern: {
        value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        message: 'Password must be at least 8 characters containing a number, an uppercase and lowercase letter, and a symbol.'
    },
};

export const checkboxRoules = {
    required: true,
};