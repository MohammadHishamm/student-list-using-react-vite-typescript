import React, { useMemo } from "react";
import "./tableForm.css";

interface Props {
  data: { id: string; name: string; age: number; grade: string }[];
}

export const Table = (props: Props) => {
  const { data } = props;
  const [tableData, setTableData] = React.useState(data);
  React.useEffect(() => {
    setTableData(data);
  }, [data]);

  const studentScholarship = useMemo(() => {
    return tableData.map((s) => {
      return { ...s, eligible: s.age >= 20 };
    });
  }, [tableData]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Eligible for Scholarship</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.grade}</td>
              <td>{studentScholarship.find(s => s.id === item.id)?.eligible ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </>
  );
};


