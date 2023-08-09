"use client";

import { getAllData, getFilterData } from "@/app/redux/slice/payment-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import data1 from "../../../public/provinces.json";
import data2 from "../../../public/districts.json";
import data3 from "../../../public/subdistricts.json";

const initialState = {
  province: "",
  district: "",
  subdistrict: "",
};

export default function Filter() {
  const [input, setInput] = useState(initialState);

  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("-----", input);
    if (input.province !== "" || input.district !== "" || input.subdistrict !== "") {
      dispatch(getFilterData(input));
    } else {
      dispatch(getAllData());
    }
  }, [input]);

  return (
    <div className="flex">
      <div className="flex flex-col items-center text-sm mx-2">
        <label for="province">จังหวัด</label>
        <select
          name="province"
          className="border border-gray-400 rounded-lg h-[38px] px-4 text-gray-400"
          // value={input.province}
          onChange={onChangeInput}
        >
          <option value={""}>---- เลือก ----</option>
          {data1.map((el) => (
            <option id={el.id}>{el.provinceNameTh}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-center text-sm mx-2">
        <label for="district">อำเภอ/เขต</label>
        <select
          name="district"
          className="border border-gray-400 rounded-lg h-[38px] px-4 text-gray-400"
          // value={input.district}
          onChange={onChangeInput}
        >
          <option value={""}>---- เลือก ----</option>
          {data2.map((el) => (
            <option id={el.id}>{el.districtNameTh}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-center text-sm mx-2">
        <label for="subdistrict">ตำบล/แขวง</label>
        <select
          name="subdistrict"
          className="border border-gray-400 rounded-lg h-[38px] px-4 text-gray-400"
          // value={input.district}
          onChange={onChangeInput}
        >
          <option value={""}>---- เลือก ----</option>
          {data3.map((el) => (
            <option id={el.id}>{el.subdistrictNameTh}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
