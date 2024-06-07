import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCreateTransaction, fetchOperationTypes } from '../actions/transactions'


const initialState = {
  transaction: {
    data: {},
    status: "loading"
  },
  operationTypes: []
}

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
      .addCase(fetchCreateTransaction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCreateTransaction.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      })
      .addCase(fetchCreateTransaction.rejected, (state) => {
        state.status = "error";
      });
    // Действия для получения типов операций
    builder
      .addCase(fetchOperationTypes.pending, (state) => {
        state.operationTypes = [];
      })
      .addCase(fetchOperationTypes.fulfilled, (state, action) => {
        state.operationTypes = action.payload;
        state.data = action.payload;
      })
      .addCase(fetchOperationTypes.rejected, (state) => {
        state.operationTypes = [];
      });


    // Действия для удаления эмитента
    // builder.addCase(fetchDeleteEmitent.pending, (state, action) => {
    //   const postIdToRemove = action.meta.arg;
    //   state.holders.items = state.holders.items.filter((obj) => obj._id !== postIdToRemove);
    // });
  },
});


export const transactionsReducer = transactionsSlice.reducer