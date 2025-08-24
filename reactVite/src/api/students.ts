import axios from "axios";

const API_URL = "http://localhost:5000/students"; // adjust port if needed

export const fetchStudents = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addStudent = async (student: {
  name: string;
  age: number;
  grade: string;
}) => {
  const res = await axios.post(API_URL, student);
  return res.data;
};

export const deleteStudent = async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
};
