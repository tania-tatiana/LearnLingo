import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import css from "./Login.module.css";
import { useContext, useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { AuthContext } from "../AuthContext/AuthContext";
import toast from "react-hot-toast";

const schema = Yup.object({
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

export default function Login({ isClosing, isRegisterOrLoginOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const { logIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: "onTouched" });

  const onSubmit = async (data) => {
    try {
      await logIn(data.email.trim(), data.password);
      reset();
      onClose();
      setShowPassword(false);
      toast.success("Successfully logged in!");
    } catch {
      toast.error("Check your data!");
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
        className={`${css.overlay} ${isRegisterOrLoginOpen === "login" && !isClosing ? css.overlayIsOpen : css.overlayIsClose}`}
        onClick={handleClose}
      >
        {/* <Toaster position="top-right" reverseOrder={false} /> */}
        <div
          className={`${css.modal} ${isRegisterOrLoginOpen === "login" && !isClosing ? css.modalIsOpen : css.modalIsClose}`}
          onClick={(event) => event.stopPropagation()}
        >
          <button className={css.closeBtn} onClick={handleClose}>
            ✕
          </button>
          <div className={css.info}>
            <div className={css.textBlock}>
              <h2 className={css.title}>Log In</h2>
              <p className={css.text}>
                Welcome back! Please enter your credentials to access your
                account and continue your search for an teacher.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={css.fields}>
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
                    onClick={() => {
                      setShowPassword((prev) => !prev);
                    }}
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
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
