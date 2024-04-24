import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchEmitents = createAsyncThunk("emitents/fetchEmitents", async () => {
    const { data } = await axios.get("/emitents");
    return data;
})

export const fetchDeleteEmitent = createAsyncThunk("emitents/fetchDeleteEmitent", async (id) => {
    await axios.delete(`/emitents/${id}`);
})

const initialState = {
    emitents: {
        items: [],
        status: "loading"
    },
    tags: {
        items: [],
        status: "loading"
    }
}

const emitentsSlice = createSlice({
    name: "emitents",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // Действия для получения постов
      builder
        .addCase(fetchEmitents.pending, (state) => {
          state.emitents.items = [];
          state.emitents.status = "loading";
        })
        .addCase(fetchEmitents.fulfilled, (state, action) => {
          state.emitents.items = action.payload;
          state.emitents.status = "loaded";
        })
        .addCase(fetchEmitents.rejected, (state) => {
          state.emitents.items = [];
          state.emitents.status = "error";
        });
      // Действия для удаления эмитента
      builder.addCase(fetchDeleteEmitent.pending, (state, action) => {
        const postIdToRemove = action.meta.arg;
        state.emitents.items = state.emitents.items.filter((obj) => obj._id !== postIdToRemove);
      });
    },
  });
  

export const emitentsReducer = emitentsSlice.reducer