"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import PaymentInput from "./components/paymentInput";
import AddressOption from "./components/addressoption";
import paymentRegister from "../validator/validate-payment";
import { createPayment } from "../redux/slice/payment-slice";

const initialInput = {
  housenumber: "",
  moo: "",
  village: "",
  soi: "",
  road: "",
  province: "",
  district: "",
  subdistrict: "",
  code: "",
};

export default function Payment() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState(initialInput);

  const dispatch = useDispatch();
  const router = useRouter();

  console.log(input);
  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleOnsubmit = (e) => {
    try {
      e.preventDefault();
      const result = paymentRegister(input);
      console.dir(result);
      if (result) {
        return setError(result);
      }
      setError({});

      dispatch(createPayment(input));
      alert("Success");

      router.push("/details");
    } catch (error) {
      //   console.log(error);
      alert("Please fill");
    }
  };

  return (
    <div className="flex justify-center h-[100vh]">
      <div className="flex flex-col items-center border border-black w-[60vw] h-[50vh]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-red-900 font-semibold text-3xl">Payment</div>
          <div className="p-2">Please fill more information.</div>
        </div>
        <form className="w-[45vw]" onSubmit={handleOnsubmit}>
          <div className="grid grid-cols-7 pt-4">
            <PaymentInput
              name="housenumber"
              placeholder="บ้านเลขที่"
              grid="col-start-1 col-end-4"
              value={input.housenumber}
              onChange={onChangeInput}
              isInvalid={error.housenumber}
            />
            <PaymentInput
              name="moo"
              placeholder="หมู่ที่"
              grid="col-start-4 col-end-5"
              value={input.moo}
              onChange={onChangeInput}
              isInvalid={error.moo}
            />
            <PaymentInput
              name="village"
              placeholder="หมู่บ้าน/อาคาร"
              grid="col-start-5 col-end-8"
              value={input.village}
              onChange={onChangeInput}
            />
          </div>
          <div className="grid grid-cols-2 gap-2 pb-4 pt-1">
            <PaymentInput
              name="soi"
              placeholder="ซอย"
              value={input.soi}
              onChange={onChangeInput}
            />
            <PaymentInput
              name="road"
              placeholder="ถนน"
              value={input.road}
              onChange={onChangeInput}
            />
            <AddressOption
              name="province"
              placeholder="จังหวัด"
              value={input.province}
              onChange={onChangeInput}
              isInvalid={error.province}
            />
            <AddressOption
              name="district"
              placeholder="อำเภอ/เขต"
              value={input.district}
              onChange={onChangeInput}
              isInvalid={error.district}
            />
            <AddressOption
              name="subdistrict"
              placeholder="ตำบล/แขวง"
              value={input.subdistrict}
              onChange={onChangeInput}
              isInvalid={error.subdistrict}
            />
            <PaymentInput
              name="code"
              placeholder="รหัสไปรษณีย์"
              value={input.code}
              onChange={onChangeInput}
              isInvalid={error.code}
            />
          </div>
          <hr />
          <div className="flex justify-center gap-4 pt-4">
            <button className="flex justify-evenly items-center bg-red-800 text-white font-semibold h-[38px] w-[135px] rounded-lg">
              <Image src="/check.svg" width={32} height={32} /> Confirm
            </button>
            <Link href="/">
              <button
                className="flex justify-evenly items-center bg-black text-white font-semibold h-[38px] w-[135px] rounded-lg"
                type="reset"
              >
                <Image src="/cancel.svg" alt="x" width={24} height={24} />{" "}
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
