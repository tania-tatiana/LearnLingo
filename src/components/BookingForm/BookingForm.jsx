import { Field, Form, Formik } from "formik";
import css from "./BookingForm.module.css";
import { useEffect } from "react";

export default function BookingForm({ teacher, onClose }) {
  const handleSubmit = (values, helpers) => {
    console.log(values);
    helpers.resetForm();
  };
  console.log(handleSubmit);
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      <button className={css.closeBtn} onClick={onClose}>
        ✕
      </button>
      <div className={css.info}>
        <h2 className={css.title}>Book trial lesson</h2>
        <p className={css.text}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>

        <div className={css.teacherFirstLine}>
          <img
            src={teacher.avatar_url}
            alt="Teacher photo"
            className={css.teacherIcon}
          />
          <div>
            <p className={css.teacher}>Your teacher</p>
            <p
              className={css.teacherName}
            >{`${teacher.name} ${teacher.surname}`}</p>
          </div>
        </div>
      </div>

      <h2 className={css.titleOfFrom}>
        What is your main reason for learning English?
      </h2>
      <Formik
        initialValues={{
          reason: "Career and business",
          username: "",
          email: "",
          phone: "",
        }}
        onSubmit={() => {}}
      >
        <Form>
          <div className={css.radioGroup}>
            <label htmlFor="reasonCareer">
              <Field
                id="reasonCareer"
                type="radio"
                name="reason"
                value="Career and business"
              />
              Career and business
            </label>
            <label htmlFor="reasonKids">
              <Field
                id="reasonKids"
                type="radio"
                name="reason"
                value="Lesson for kids"
              />
              Lesson for kids
            </label>
            <label htmlFor="reasonAbroad">
              <Field
                id="reasonAbroad"
                type="radio"
                name="reason"
                value="Living abroad"
              />
              Living abroad
            </label>
            <label htmlFor="reasonExams">
              <Field
                id="reasonExams"
                type="radio"
                name="reason"
                value="Exams and coursework"
              />
              Exams and coursework
            </label>
            <label htmlFor="reasonCulture">
              <Field
                id="reasonCulture"
                type="radio"
                name="reason"
                value="Culture, travel or hobby"
              />
              Culture, travel or hobby
            </label>
          </div>
          <div className={css.inputs}>
            <Field
              type="text"
              name="username"
              placeholder="Full Name"
              className={css.input}
            />
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={css.input}
            />
            <Field
              type="phone"
              name="phone"
              placeholder="Phone number"
              className={css.input}
            />
          </div>

          <button type="submit" className={css.button}>
            Book
          </button>
        </Form>
      </Formik>
    </div>
  );
}
