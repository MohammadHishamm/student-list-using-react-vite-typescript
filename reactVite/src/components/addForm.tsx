import React, { useRef, useState, useEffect } from "react";
import { Table } from "./table";
import { addStudent, fetchStudents } from "../api/students";
import "./tableForm.css";

interface Student {
  _id: string; // MongoDB uses _id
  name: string;
  age: number;
  grade: string;
}

export const AddForm = () => {
  const nameref = useRef<HTMLInputElement>(null);
  const ageref = useRef<HTMLInputElement>(null);
  const graderef = useRef<HTMLInputElement>(null);

  const [students, setStudents] = useState<Student[]>([]);

  
  useEffect(() => {
    const loadStudents = async () => {
      const data = await fetchStudents();
      setStudents(data);
    };
    loadStudents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newStudent = {
      name: nameref.current?.value || "",
      age: Number(ageref.current?.value) || 0,
      grade: graderef.current?.value || "",
    };

    // 1. save to DB
    const saved = await addStudent(newStudent);

    // 2. update state
    setStudents((prev) => [...prev, saved]);

    // clear inputs
    if (nameref.current) nameref.current.value = "";
    if (ageref.current) ageref.current.value = "";
    if (graderef.current) graderef.current.value = "";
  };

  const handleClear = () => setStudents([]);

  return (
    <>
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
