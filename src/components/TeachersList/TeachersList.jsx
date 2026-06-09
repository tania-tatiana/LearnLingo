import css from "./TeachersList.module.css";

export default function TeachersList({ teachers }) {
  return (
    <ul className={css.list}>
      {teachers.map((teacher) => {
        return (
          <li key={`${teacher.name} ${teacher.surname}`} className={css.item}>
            <div className={css.card}>
              <img src={teacher.avatar_url} alt="" className={css.icon} />
              <div className={css.allText}>
                <div className={css.firstLine}>
                  <div className={css.mainInfo}>
                    <p className={css.languages}>Languages</p>
                    <h1
                      className={css.name}
                    >{`${teacher.name} ${teacher.surname}`}</h1>
                  </div>
                  <div className={css.details}>
                    <p className={css.lessons}>Lessons online</p>
                    <p className={css.quantity}>
                      Lessons done: {teacher.lessons_done}
                    </p>
                    <p className={css.rating}>Rating: {teacher.rating}</p>
                    <p className={css.price}>
                      Price / 1 hour:{" "}
                      <span className={css.priceGreen}>
                        {teacher.price_per_hour}$
                      </span>
                    </p>
                  </div>
                </div>
                <div className={css.desc}>
                  <p className={css.speaks}>
                    Speaks:{" "}
                    <span className={css.speaksSpan}>
                      {teacher.languages.join(", ")}
                    </span>
                  </p>
                  <p className={css.info}>
                    Lesson Info:{" "}
                    <span className={css.infoSpan}>{teacher.lesson_info}</span>
                  </p>
                  <p className={css.conditions}>
                    Conditions:{" "}
                    <span className={css.conditionsSpan}>
                      {teacher.conditions.join(" ")}
                    </span>
                  </p>
                </div>
                <a href="" className={css.button}>
                  Read more
                </a>
                <div className={css.englishLevels}>
                  {teacher.levels.map((level, index) => (
                    <p
                      key={level}
                      className={
                        index === 0 ? css.englishLevelActive : css.englishLevel
                      }
                    >
                      {level}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
