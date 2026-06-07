import css from "./Advantages.module.css";

export default function Advantages() {
  const advantages = [
    { quantity: "32,000+", advantage: "Experienced tutors" },
    { quantity: "300,000+", advantage: "5-star tutor reviews" },
    { quantity: "120+", advantage: "Subjects taught" },
    { quantity: "200+", advantage: "Tutor nationalities" },
  ];
  return (
    <div className={css.wrapper}>
      {advantages.map((advantage) => (
        <div key={advantage.quantity} className={css.advantagesBlock}>
          <p className={css.quantity}>{advantage.quantity}</p>
          <p className={css.advantage}>{advantage.advantage}</p>
        </div>
      ))}
    </div>
  );
}
