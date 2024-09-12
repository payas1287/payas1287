import React from "react";
import { useContext } from "react";
import { StudentContext } from "react";

const OgrenciItem = () => {
  const { student, changeColor } = useContext(StudentContext);

  return (
    <div>
      {student.map((std) => (
        <div key={std.id} style={{ background: std.color }}>
          <h3>NAME: {std.name}</h3>
          <h4>EMAIL: {std.email}</h4>
          <h4>AGE: {std.age}</h4>
          COLOR:{" "}
          <input
            type="text"
            value={std.color}
            onchange={(e) => changeColor(std.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default OgrenciItem;
