"use client";

import { getAllData, getFilterData } from "@/app/redux/slice/payment-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import data from "../../../public/provinces.json";

export default function Filter() {
  const [input, setInput] = useState({ province: "" });

  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setInput({ [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // console.log("-----", input.province);
    if (input.province !== "") {
      dispatch(getFilterData(input));
    } else {
      dispatch(getAllData());
    }
  }, [input]);

  return (
    <div className="flex flex-col items-center text-sm mx-2">
      <label for="province">จังหวัด</label>
      <select
        name="province"
        className="border border-gray-400 rounded-lg h-[38px] px-4 text-gray-400"
        // value={input}
        onChange={onChangeInput}
      >
        <option value={""}>---- เลือก ----</option>
        {data.map((el) => (
          <option id={el.id}>{el.provinceNameTh}</option>
        ))}
      </select>
    </div>
  );
}
