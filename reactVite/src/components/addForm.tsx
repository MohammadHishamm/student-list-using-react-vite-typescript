import React, { useRef, useState } from "react";
import { Table } from "./table";
import { v4 as uuidv4 } from "uuid";
import "./tableForm.css";

export const AddForm = () => {
  const nameref = useRef<HTMLInputElement>(null);
  const ageref = useRef<HTMLInputElement>(null);
  const graderef = useRef<HTMLInputElement>(null);

  const [students, setStudents] = useState<
    { id: string; name: string; age: number; grade: string }[]
  >([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // stop page reload

    const newStudent = {
      id: uuidv4(),
      name: nameref.current?.value || "",
      age: Number(ageref.current?.value) || 0,
      grade: graderef.current?.value || "",
    };

    // add new student to the list
    setStudents((prev) => [...prev, newStudent]);

    // optional: clear inputs
    if (nameref.current) nameref.current.value = "";
    if (ageref.current) ageref.current.value = "";
    if (graderef.current) graderef.current.value = "";
  };

  const handleClear = () => setStudents([]);

  return (
    <>
      {/* Table will always render the latest students */}
      <Table data={students} />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required ref={nameref} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" required ref={ageref} />
        </div>
        <div>
          <label htmlFor="grade">Grade:</label>
          <input type="text" id="grade" required ref={graderef} />
        </div>
        <div className="form-actions">
          <button type="submit">Add</button>
          <button type="button" className="clear-btn" onClick={handleClear}>
            Clear Table
          </button>
        </div>
      </form>
    </>
  );
};
