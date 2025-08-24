import { deleteStudent } from "../api/students";



interface Student {
  _id: string;
  name: string;
  age: number;
  grade: string;
}

interface Props {
  data: Student[];
}

export const Table = ({ data }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Grade</th>
          <th>Eligible for Scholarship</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.grade}</td>
            <td>{item.age >= 20 ? "Yes" : "No"}</td>
            <td><button className="clear-btn" onClick={() => deleteStudent(item._id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
