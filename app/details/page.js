"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../redux/slice/payment-slice";
import Filter from "./components/filter";

import PaymentShow from "./components/paymentshow";
import SelectPage from "./components/selectpage";

export default function Details() {
  const filterData = useSelector((state) => state.payment.filterData);

  const [pageAt, setPageAt] = useState(1);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  const handleHomePage = () => {
    router.push("/");
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center">
      <div className="border border-black w-[60vw]">
        <div className="flex justify-between pb-2">
          <div className="text-2xl flex items-center" onClick={handleHomePage}>
            &larr;
          </div>
          <div className="flex items-center py-1">
            <Filter />
          </div>
          <div className="text-2xl flex items-center invisible">&larr;</div>
        </div>
        <PaymentShow
          pageAt={pageAt}
          setPageAt={setPageAt}
          filterData={filterData}
        />
        <SelectPage
          pageAt={pageAt}
          setPageAt={setPageAt}
          filterData={filterData}
        />
      </div>
    </div>
  );
}
