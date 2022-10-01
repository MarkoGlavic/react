import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = (props) => {
  const list = props.modules.map((f, index) => 
  <tr key={index}>
    <td>{props.modules[index].name}</td>
    <td>{props.modules[index].noLectures}</td>
    <td>{props.modules[index].noPracticals}</td>
  </tr>);
  return (
    <>
      <h1>{props.course}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No Practicals</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
      </>
  );
};

export default Demo;
