import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as paymentApi from "../../api/payment-api";

const initialState = {
  error: null,
  allData: [],
  filterData: [],
};

export const createPayment = createAsyncThunk(
  "payment/createPayment",
  async (input) => {
    try {
      // console.log("-----", input);
      const res = await paymentApi.createPayment(input);
      //   return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllData = createAsyncThunk("payment/getAllData", async (_) => {
  try {
    // console.log("uuuuuuu");
    const res = await paymentApi.getAllData();
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const getFilterData = createAsyncThunk(
  "payment/getFilterData",
  async (input) => {
    try {
      // console.log(input);
      const res = await paymentApi.getFilterData(input);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createPayment.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action.payload;
        state.filterData = action.payload;
      })
      .addCase(getFilterData.fulfilled, (state, action) => {
        state.filterData = action.payload;
      });
  },
});

export default paymentSlice.reducer;
