import { configureStore } from "@reduxjs/toolkit";

import paymenReducer from "../redux/slice/payment-slice";

const store = configureStore({
  reducer: {
    payment: paymenReducer,
  },
});

export default store;
