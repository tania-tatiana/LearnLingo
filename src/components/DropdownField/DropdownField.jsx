import { IoIosArrowDown } from "react-icons/io";
import css from "./DropdownField.module.css";

export default function DropdownField({
  label,
  value,
  options,
  isOpen,
  onToggle,
  onChange,
}) {
  return (
    <div className={css.selectWrapper}>
      <label className={css.label}>{label}</label>
      <div className={css.selectContainer}>
        <div onClick={onToggle} className={css.select}>
          {value || label}
        </div>
        <ul className={`${css.dropdown} ${isOpen ? css.open : ""}`}>
          {options.map((option) => (
            <li
              className={`${css.item} ${value === option.value ? css.active : ""}`}
              key={option.value}
              onClick={() => {
                onChange(option.value);
                onToggle();
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <IoIosArrowDown className={css.arrow} />
      </div>
    </div>
  );
}
