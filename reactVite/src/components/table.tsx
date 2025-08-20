import React from "react";
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

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </>
  );
};
