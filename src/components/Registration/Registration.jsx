import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import css from "./Registration.module.css";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import toast from "react-hot-toast";

const schema = Yup.object({
  name: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .lowercase()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Min 6 characters")
    .max(20, "Too long")
    .required("Password is required"),
});

export default function Registration({
  isClosing,
  isRegisterOrLoginOpen,
  onClose,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email.trim(), data.password);
      reset();
      onClose();
      setShowPassword(false);
      toast.success("Successfully registered!");
    } catch (error) {
      toast.error("Check your data!", error);
    }
  };

  const handleClose = () => {
    reset();
    setShowPassword(false);
    onClose();
  };

  return (
    <>
      <div
        className={`${css.overlay} ${isRegisterOrLoginOpen === "register" && !isClosing ? css.overlayIsOpen : css.overlayIsClose}`}
        onClick={handleClose}
      >
        {/* <Toaster position="top-right" reverseOrder={false} /> */}
        <div
          className={`${css.modal} ${isRegisterOrLoginOpen === "register" && !isClosing ? css.modalIsOpen : css.modalIsClose}`}
          onClick={(event) => event.stopPropagation()}
        >
          <button className={css.closeBtn} onClick={handleClose}>
            ✕
          </button>
          <div className={css.info}>
            <div className={css.textBlock}>
              <h2 className={css.title}>Registration</h2>
              <p className={css.text}>
                Thank you for your interest in our platform! In order to
                register, we need some information. Please provide us with the
                following information
              </p>
            </div>
            <form
              // initialValues={{ name: "", email: "", password: "" }}
              // validationSchema={schema}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={css.fields}>
                <div className={css.fieldWrapper}>
                  <input
                    {...register("name")}
                    placeholder="Name"
                    className={`${css.field} ${touchedFields.name && errors.name ? css.error : ""} ${touchedFields.name && !errors.name ? css.success : ""}`}
                  ></input>
                  {errors.name && (
                    <div className={css.errorText}>{errors.name.message}</div>
                  )}
                </div>
                <div className={css.fieldWrapper}>
                  <input
                    {...register("email")}
                    placeholder="Email"
                    className={`${css.field} ${touchedFields.email && errors.email ? css.error : ""} ${touchedFields.email && !errors.email ? css.success : ""}`}
                  ></input>
                  {errors.email && (
                    <div className={css.errorText}>{errors.email.message}</div>
                  )}
                </div>
                <div className={css.fieldWrapper}>
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`${css.field} ${touchedFields.password && errors.password ? css.error : ""} ${touchedFields.password && !errors.password ? css.success : ""}`}
                  ></input>
                  <button
                    type="button"
                    className={css.eyeBtn}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <FiEye size={20} />
                    ) : (
                      <FiEyeOff size={20} />
                    )}
                  </button>
                  {errors.password && (
                    <div className={css.errorTextPassword}>
                      {errors.password.message}
                    </div>
                  )}
                </div>
              </div>
              <button type="submit" className={css.signUp}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
