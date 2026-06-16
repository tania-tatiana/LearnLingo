import { Field, Form, Formik } from "formik";

export default function Login() {
  return (
    <>
      <h2>Log In</h2>
      <h3>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </h3>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Field name="email" placeholder="Email"></Field>
          <Field name="password" type="password" placeholder="Password"></Field>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
}
