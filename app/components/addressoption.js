"use client";

import { useState } from "react";

import data1 from "../../public/provinces.json";
import data2 from "../../public/districts.json";
import data3 from "../../public/subdistricts.json";
import InputErrorMessage from "./inputerrormessage";

export default function AddressOption({ name, placeholder, onChange, value, isInvalid }) {
  // const res1 = await fetch(
  //   "https://raw.githubusercontent.com/thailand-geography-data/thailand-geography-json/main/src/provinces.json"
  // );
  // const data1 = await res1.json();

  // const res2 = await fetch(
  //   "https://raw.githubusercontent.com/thailand-geography-data/thailand-geography-json/main/src/districts.json"
  // );
  // const data2 = await res2.json();

  // Error: fetch for over 2MB of data can not be cached
  // const res3 = await fetch("https://raw.githubusercontent.com/thailand-geography-data/thailand-geography-json/main/src/subdistricts.json");
  // const data3 = await res3.json();

  // const [province, setProvince] = useState("---- เลือก ----");
  // const [district, setDistrict] = useState("---- เลือก ----");
  // const [subdistrict, setSubdistrict] = useState("---- เลือก ----");

  const text = isInvalid ? (
    <InputErrorMessage message={isInvalid} placeholder={placeholder} />
  ) : (
    placeholder
  );

  return (
    <>
      {name == "province" ? (
        <div className="flex flex-col text-sm mx-2">
          <label for={name}>{text}</label>
          <select
            id={name}
            name={name}
            className="border border-gray-400 rounded-lg h-[38px] px-4 text-gray-400"
            value={value}
            onChange={onChange}
          >
            <option value={""} >---- เลือก ----</option>
            {data1.map((el) => (
              <option id={el.id}>{el.provinceNameTh}</option>
            ))}
          </select>
        </div>
      ) : name == "district" ? (
        <div className="flex flex-col text-sm mx-2">
          <label for={name}>{text}</label>
          <select
            id={name}
            name={name}
            className="border border-gray-400 rounded-lg h-[38px] px-4 text-gray-400"
            value={value}
            onChange={onChange}
          >
            <option value={""}>---- เลือก ----</option>
            {data2.map((el) => (
              <option id={el.id}>{el.districtNameTh}</option>
            ))}
          </select>
        </div>
      ) : (
        <div className="flex flex-col text-sm mx-2">
          <label for={name}>{text}</label>
          <select
            id={name}
            name={name}
            className="border border-gray-400 rounded-lg h-[38px] px-4 text-gray-400"
            value={value}
            onChange={onChange}
          >
            <option value={""}>---- เลือก ----</option>
            {data3.map((el) => (
              <option id={el.id}>{el.subdistrictNameTh}</option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}
