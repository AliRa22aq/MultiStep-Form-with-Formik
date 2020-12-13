import * as Yup from 'yup';

export const namesSchema = Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .min(3, 'Must be 3 characters or more')
                        .required('First Name Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .min(5, 'Must be 5 characters or more')
                        .required('Last Name Required'),
                    email: Yup.string().email()
                        .required('Email Required'),
    })

export const addressSchema = Yup.object({
    area: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Area Required'),
    city: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .min(5, 'Must be 5 characters or more')
        .required('City Required'),
    country: Yup.string()
        .required('Country Required'),
})


export const experienceSchema = Yup.object({
    designation: Yup.string()
        .required('Area Required'),
    company: Yup.string()
        .required('City Required'),
    duration: Yup.string()
        .required('Country Required'),
})


