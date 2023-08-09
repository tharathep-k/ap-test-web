"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../redux/slice/payment-slice";

import PaymentShow from "./components/paymentshow";
import SelectPage from "./components/selectpage";

export default function Details() {
  const allData = useSelector((state) => state.payment.allData);

  const [pageAt, setPageAt] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center">
      <div className="border border-black ">
        <PaymentShow pageAt={pageAt} setPageAt={setPageAt} allData={allData}/>
        <SelectPage pageAt={pageAt} setPageAt={setPageAt} allData={allData} />
      </div>
    </div>
  );
}
