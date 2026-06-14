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
  email: yup.string().required("Email is required").email("Invalid email"),
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

  useEffect(() => {
    const original = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
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
        <div className={css.radioGroup}>
          <label htmlFor="reasonCareer">
            <input
              type="radio"
              value="Career and business"
              {...register("reason")}
            />
            Career and business
          </label>
          <label htmlFor="reasonKids">
            <input
              type="radio"
              value="Lesson for kids"
              {...register("reason")}
            />
            Lesson for kids
          </label>
          <label htmlFor="reasonAbroad">
            <input type="radio" value="Living abroad" {...register("reason")} />
            Living abroad
          </label>
          <label htmlFor="reasonExams">
            <input
              type="radio"
              value="Exams and coursework"
              {...register("reason")}
            />
            Exams and coursework
          </label>
          <label htmlFor="reasonCulture">
            <input
              type="radio"
              value="Culture, travel or hobby"
              {...register("reason")}
            />
            Culture, travel or hobby
          </label>
          {errors.reason && <p>{errors.reason.message}</p>}
        </div>
        <div className={css.inputs}>
          <input
            type="text"
            placeholder="Full Name"
            {...register("username")}
            className={css.input}
          />
          {errors.username && <p>{errors.username.message}</p>}
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className={css.input}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            type="tel"
            placeholder="Phone number"
            {...register("phone")}
            className={css.input}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <button type="submit" className={css.button}>
          Book
        </button>
      </form>
    </div>
  );
}
