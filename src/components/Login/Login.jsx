import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./Login.module.css";

const schema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Min 6 characters")
    .max(20, "Too long")
    .required("Password is required"),
});

export default function Login({ isClosing, isRegisterOrLoginOpen, onClose }) {
  const onSubmit = (data) => {
    console.log(data);
    onClose();
  };
  return (
    <div
      className={`${css.overlay} ${isRegisterOrLoginOpen === "login" && !isClosing ? css.overlayIsOpen : css.overlayIsClose}`}
      onClick={onClose}
    >
      <div
        className={`${css.modal} ${isRegisterOrLoginOpen === "login" && !isClosing ? css.modalIsOpen : css.modalIsClose}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button className={css.closeBtn} onClick={onClose}>
          ✕
        </button>
        <div className={css.info}>
          <div className={css.textBlock}>
            <h2 className={css.title}>Log In</h2>
            <p className={css.text}>
              Welcome back! Please enter your credentials to access your account
              and continue your search for an teacher.
            </p>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={schema}
            onSubmit={onSubmit}
          >
            {({ errors, touched, values }) => (
              <Form>
                <div className={css.fields}>
                  <div className={css.fieldWrapper}>
                    <Field
                      name="email"
                      placeholder="Email"
                      className={`${css.field} ${touched.email && errors.email ? css.error : ""} ${touched.email && !errors.email && values.email ? css.success : ""}`}
                    ></Field>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={css.errorText}
                    />
                  </div>
                  <div className={css.fieldWrapper}>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className={`${css.field} ${touched.password && errors.password ? css.error : ""} ${touched.password && !errors.password && values.password ? css.success : ""}`}
                    ></Field>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className={css.errorText}
                    />
                  </div>
                </div>
                <button type="submit" className={css.signUp}>
                  Log In
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
