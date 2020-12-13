import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {namesSchema} from './schemas'

export const Names = ({submit, setData, data}) => {

  return (
    <Formik
      initialValues={data}
      validationSchema={namesSchema}
      onSubmit={(values) => {
        submit(1)
        setData({...values, ...data})
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label> <br />
        <Field name="firstName" type="text" /> <br />
        <ErrorMessage name="firstName" /> <br />
        <label htmlFor="lastName">Last Name</label> <br />
        <Field name="lastName" type="text" /> <br />
        <ErrorMessage name="lastName" /> <br />
        <label htmlFor="email">Email Address</label> <br />
        <Field name="email" type="email" /> <br />
        <ErrorMessage name="email" />  <br /><br />
        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};