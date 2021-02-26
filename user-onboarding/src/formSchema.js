import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required, please fill out')
        .min(3, 'Name must be 3 characters long'),
    email: yup.string()
        .trim()
        .required('Email is required, please fill out.'),
    password: yup.string()
        .trim()
        .required('Password is required, please fill out.'),
    tos: yup.boolean().oneOf([true], 'you must agree to the terms of service'),
})

export default formSchema