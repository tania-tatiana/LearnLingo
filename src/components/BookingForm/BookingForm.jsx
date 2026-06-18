import css from "./BookingForm.module.css";
import { useEffect } from "react";
import * as yup from "yup";
import "yup-phone-lite";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  reason: yup.string().required("Please select a reason"),
  username: yup
    .string()
    .required("Name is required")
    .min(2, "Too short!")
    .max(50, "To long!"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .phone("UK", "Please enter a valid phone number"),
});

export default function BookingForm({ teacher, onClose }) {
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

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      reason: "Career and business",
      username: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    onClose();
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`${css.radioGroup} ${errors.reason ? css.errorRadio : ""}`}
        >
          <label htmlFor="reasonCareer">
            <input
              id="reasonCareer"
              type="radio"
              value="Career and business"
              {...register("reason")}
            />
            Career and business
          </label>
          <label htmlFor="reasonKids">
            <input
              id="reasonKids"
              type="radio"
              value="Lesson for kids"
              {...register("reason")}
            />
            Lesson for kids
          </label>
          <label htmlFor="reasonAbroad">
            <input
              id="reasonAbroad"
              type="radio"
              value="Living abroad"
              {...register("reason")}
            />
            Living abroad
          </label>
          <label htmlFor="reasonExams">
            <input
              id="reasonExams"
              type="radio"
              value="Exams and coursework"
              {...register("reason")}
            />
            Exams and coursework
          </label>
          <label htmlFor="reasonCulture">
            <input
              id="reasonCulture"
              type="radio"
              value="Culture, travel or hobby"
              {...register("reason")}
            />
            Culture, travel or hobby
          </label>
          {errors.reason && (
            <p className={css.errorText}>{errors.reason.message}</p>
          )}
        </div>
        <div className={css.inputs}>
          <input
            type="text"
            placeholder="Full Name"
            {...register("username")}
            className={`${css.input} ${errors.username ? css.errorInput : ""} ${!errors.username && touchedFields.username ? css.successInput : ""}`}
          />
          {errors.username && (
            <p className={css.errorText}>{errors.username.message}</p>
          )}
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className={`${css.input} ${errors.email ? css.errorInput : ""} ${!errors.email && dirtyFields.email ? css.successInput : ""}`}
          />
          {errors.email && (
            <p className={css.errorText}>{errors.email.message}</p>
          )}
          <input
            type="tel"
            placeholder="Phone number"
            {...register("phone")}
            className={`${css.input} ${errors.phone ? css.errorInput : ""} ${!errors.phone && touchedFields.phone ? css.successInput : ""}`}
          />
          {errors.phone && (
            <p className={css.errorText}>{errors.phone.message}</p>
          )}
        </div>

        <button type="submit" className={css.button}>
          Book
        </button>
      </form>
    </div>
  );
}
