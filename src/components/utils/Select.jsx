import React from "react";

const Select = ({ options = [] }) => {

    const styling = {
      backgroundColor: "transparent",
      color: "#b3b3b3",
      border:'none',
      fontSize: '12px',
      marginRight: '20px',
    };


  return (
    <select style={styling}>
      {options.map((option, index) => {
        return (
          <option key={index} value="">
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
