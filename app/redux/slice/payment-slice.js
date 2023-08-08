import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const createPayment = createAsyncThunk(
  "payment/createPayment",
  (input) => {
    try {
    } catch (error) {
      console.log(error);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  extraReducers: (builder) => {
    builder;
  },
});

export default paymentSlice.reducer