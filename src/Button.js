import React from "react";

export const Button = (props) => {
  console.log(props);
  return (
    <button style={{ backgroundColor: "black", color: "white" }}>
      {props.text ?? "Save"}
    </button>
  );
};
