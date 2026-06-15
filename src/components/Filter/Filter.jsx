import DropdownField from "../DropdownField/DropdownField";
import css from "./Filter.module.css";
import { useState } from "react";

export default function Filter({ filters, setFilters }) {
  const [open, setOpen] = useState(null);

  return (
    <div className={css.wrapper}>
      <DropdownField
        label="Languages"
        value={filters.language}
        options={[
          { value: "French", label: "French" },
          { value: "English", label: "English" },
          { value: "German", label: "German" },
          { value: "Ukrainian", label: "Ukrainian" },
          { value: "Polish", label: "Polish" },
        ]}
        isOpen={open === "language"}
        onToggle={() => setOpen(open === "language" ? null : "language")}
        onChange={(value) =>
          setFilters((prev) => ({ ...prev, language: value }))
        }
      />
      <DropdownField
        label="Level of knowledge"
        value={filters.level}
        options={[
          { value: "A1 Beginner", label: "A1 Beginner" },
          { value: "A2 Elementary", label: "A2 Elementary" },
          { value: "B1 Intermediate", label: "B1 Intermediate" },
          { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
        ]}
        isOpen={open === "level"}
        onToggle={() => setOpen(open === "level" ? null : "level")}
        onChange={(value) => setFilters((prev) => ({ ...prev, level: value }))}
      />
      <DropdownField
        label="Price"
        value={filters.price}
        options={[
          { value: "10", label: "10" },
          { value: "20", label: "20" },
          { value: "30", label: "30" },
          { value: "40", label: "40" },
        ]}
        isOpen={open === "price"}
        onToggle={() => setOpen(open === "price" ? null : "price")}
        onChange={(value) => setFilters((prev) => ({ ...prev, price: value }))}
      />
    </div>
  );
}
