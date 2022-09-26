import React from "react";
import { useForm } from "react-hook-form";

const Headcount = ({number,register}) => {
  return (
      <label htmlFor={number}>
        <input
          {...register("headcount",{
            required:true,
          })}
          type="radio"
          id={number}
          value={number}
        />
        {number}명
      </label>
  );
};

export default Headcount;
