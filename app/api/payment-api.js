import axios from "./axios";

export const getAllData = () => axios.get("/payment/getalldata")
export const getFilterData = (input) => axios.get(`payment/filterdata`, {params: input})
export const createPayment = (input) => axios.post("/payment/createpayment", input)