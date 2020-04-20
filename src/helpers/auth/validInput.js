import Validator from 'validator';
import isEmpty from 'lodash.isempty';

export default function validateInput(values) {
    let err = {};

    if (Validator.isEmpty(values.username)) {
        err.username= 'Username is required';
    }

    if (Validator.isEmpty(values.password)) {
        err.password='Password is required'
    }

    return {
        err,
        isValid: isEmpty(err)
    };
}