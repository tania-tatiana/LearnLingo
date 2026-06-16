import { Field, Form, Formik } from "formik";

export default function Registration() {
  return (
    <>
      <h2>Registration</h2>
      <h3>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </h3>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Field name="name" placeholder="Name"></Field>
          <Field name="email" placeholder="Email"></Field>
          <Field name="password" type="password" placeholder="Password"></Field>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </>
  );
}
