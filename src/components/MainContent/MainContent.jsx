import { Link } from "react-router-dom";
import css from "./MainContent.module.css";

export default function MainContent() {
  return (
    <>
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
        <img src="/src/assets/block.svg" alt="Lady with laptop" />
      </section>
    </>
  );
}
