import React from "react";

function Employee({ id, name, salary, department }) {
  return <div>
      <p>Employee id is {id}</p>
      <p>{name} works in {department}</p>
      <p>salary is {salary}</p>
      <hr />
  </div>;
}

export default Employee;
