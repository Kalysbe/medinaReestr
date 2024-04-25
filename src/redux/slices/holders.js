import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {  fetchHolders } from '../actions/holders'
// export const fetchHolders = createAsyncThunk("holders/fetchHolders", async () => {
//     const { data } = await axios.get("/holders");
//     return data;
// })

// export const fetchDeleteEmitent = createAsyncThunk("holders/fetchDeleteEmitent", async (id) => {
//     await axios.delete(`/holders/${id}`);
// })

const initialState = {
    holders: {
        items: [],
        status: "loading"
    }
}

const holdersSlice = createSlice({
    name: "holders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // Действия для получения постов
      builder
        .addCase(fetchHolders.pending, (state) => {
          state.holders.items = [];
          state.holders.status = "loading";
        })
        .addCase(fetchHolders.fulfilled, (state, action) => {
          state.holders.items = action.payload;
          state.holders.status = "loaded";
        })
        .addCase(fetchHolders.rejected, (state) => {
          state.holders.items = [];
          state.holders.status = "error";
        });
      // Действия для удаления эмитента
      // builder.addCase(fetchDeleteEmitent.pending, (state, action) => {
      //   const postIdToRemove = action.meta.arg;
      //   state.holders.items = state.holders.items.filter((obj) => obj._id !== postIdToRemove);
      // });
    },
  });
  

export const holdersReducer = holdersSlice.reducer