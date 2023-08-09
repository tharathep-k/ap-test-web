import axios from "./axios";

export const getAllData = () => axios.get("/payment/getalldata")
export const createPayment = (input) => axios.post("/payment/createpayment", input)