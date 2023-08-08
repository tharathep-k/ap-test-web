import axios from "./axios";

export const createPayment = (input) => axios.post("/payment/createpayment", input)