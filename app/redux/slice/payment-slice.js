import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as paymentApi from "../../api/payment-api";

const initialState = {
  error: null,
  data: {},
};

export const createPayment = createAsyncThunk(
  "payment/createPayment",
  async (input) => {
    try {
      console.log("-----",input);
      const res = await paymentApi.createPayment(input);
      //   return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createPayment.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default paymentSlice.reducer;
