import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {  fetchCardEmitent } from '../actions/prints'


const initialState = {
    prints: {
        data: [],
        status: "loading"
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
          state.prints.data = [];
          state.prints.status = "loading";
        })
        .addCase(fetchCardEmitent.fulfilled, (state, action) => {
          state.prints.data = action.payload;
          state.prints.status = "loaded";
        })
        .addCase(fetchCardEmitent.rejected, (state) => {
          state.prints.data = [];
          state.prints.status = "error";
        });
   
    },
  });
  

export const printsReducer = printsSlice.reducer