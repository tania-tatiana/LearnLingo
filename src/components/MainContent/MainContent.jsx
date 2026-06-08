import { Link } from "react-router-dom";
import lady from "../../assets/68e4226188648a055ee1b42bed644f46-sticker 1.svg";
import css from "./MainContent.module.css";

export default function MainContent() {
  return (
    <section className={css.wrapper}>
      <div className={css.allText}>
        <h1 className={css.title}>
          Unlock your potential with the best{" "}
          <span className={css.language}>language</span> tutors
        </h1>
        <p className={css.text}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <Link to="/teachers" className={css.button}>
          Get started
        </Link>
      </div>

      <div className={css.image}>
        <svg
          className={css.background}
          width="568"
          height="530"
          viewBox="0 0 568 530"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ФОН */}
          <rect
            width="568"
            height="530"
            rx="30"
            fill="var(--color-background-image)"
          />
        </svg>
        <img src={lady} className={css.lady} alt="Lady with laptop" />
        <svg
          className={css.laptop}
          width="568"
          height="530"
          viewBox="0 0 568 530"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* НОУТБУК */}
          <g>
            <path
              d="M110.058 354C106.513 354 103.64 356.879 103.64 360.43V594.821C103.64 598.372 106.513 601.251 110.058 601.251H456.942C460.487 601.251 463.36 598.372 463.36 594.821V360.43C463.36 356.879 460.487 354 456.942 354H110.058Z"
              fill="var(--color-laptop)"
            />
          </g>
          {/* ЯБЛУЧКО */}
          <g>
            <path
              d="M295.091 420.385C295.091 423.175 294.092 425.78 292.101 428.191C289.698 431.057 286.792 432.713 283.641 432.452C283.601 432.117 283.577 431.765 283.577 431.395C283.577 428.717 284.72 425.85 286.749 423.507C287.762 422.32 289.05 421.334 290.613 420.547C292.172 419.771 293.646 419.342 295.033 419.269C295.051 419.435 295.065 419.601 295.074 419.766C295.085 419.973 295.091 420.18 295.091 420.385Z"
              fill="var(--color-apple)"
            />
            <path
              d="M305.639 462.742C304.812 464.691 303.834 466.485 302.7 468.134C301.155 470.383 299.889 471.939 298.914 472.803C297.402 474.222 295.782 474.949 294.048 474.99C292.803 474.99 291.301 474.628 289.553 473.895C287.799 473.165 286.188 472.803 284.714 472.803C283.169 472.803 281.511 473.165 279.738 473.895C277.962 474.628 276.532 475.011 275.438 475.049C273.775 475.121 272.117 474.374 270.462 472.803C269.406 471.863 268.085 470.252 266.502 467.969C264.804 465.531 263.408 462.704 262.315 459.481C261.143 456 260.556 452.629 260.556 449.365C260.556 445.627 261.348 442.402 262.934 439.7C264.18 437.53 265.838 435.818 267.913 434.561C269.988 433.304 272.23 432.664 274.644 432.623C275.965 432.623 277.698 433.04 279.85 433.859C281.997 434.682 283.376 435.099 283.98 435.099C284.432 435.099 285.963 434.611 288.559 433.639C291.014 432.738 293.086 432.364 294.784 432.511C299.383 432.89 302.838 434.74 305.136 438.073C301.023 440.617 298.988 444.179 299.029 448.748C299.066 452.308 300.331 455.27 302.818 457.622C303.945 458.713 305.204 459.557 306.604 460.156C306.301 461.055 305.98 461.916 305.639 462.742Z"
              fill="var(--color-apple)"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
