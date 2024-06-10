import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCardEmitent, fetchExtractReestr,fetchTransactionPrintById } from '../actions/prints'


const initialState = {
  prints: {
    printData: [],
    printStatus: "loading"
  }
}

const printsSlice = createSlice({
  name: "prints",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Действия для получения постов
    builder
      .addCase(fetchCardEmitent.pending, (state) => {
        state.prints.printData = [];
        state.prints.printStatus = "loading";
      })
      .addCase(fetchCardEmitent.fulfilled, (state, action) => {
        state.prints.printData = action.payload;
        state.prints.printStatus = "loaded";
      })
      .addCase(fetchCardEmitent.rejected, (state) => {
        state.prints.printData = [];
        state.prints.printStatus = "error";
      });
    builder
      .addCase(fetchExtractReestr.pending, (state) => {
        state.prints.printData = [];
        state.prints.printStatus = "loading";
      })
      .addCase(fetchExtractReestr.fulfilled, (state, action) => {
        state.prints.printData = action.payload;
        state.prints.printStatus = "loaded";
      })
      .addCase(fetchExtractReestr.rejected, (state) => {
        state.prints.printData = [];
        state.prints.printStatus = "error";
      });
      builder
      .addCase(fetchTransactionPrintById.pending, (state) => {
        state.prints.printData = [];
        state.prints.printStatus = "loading";
      })
      .addCase(fetchTransactionPrintById.fulfilled, (state, action) => {
        state.prints.printData = action.payload;
        state.prints.printStatus = "loaded";
      })
      .addCase(fetchTransactionPrintById.rejected, (state) => {
        state.prints.printData = [];
        state.prints.printStatus = "error";
      });

  },
});


export const printsReducer = printsSlice.reducer