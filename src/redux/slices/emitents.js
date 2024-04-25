import { createSlice } from "@reduxjs/toolkit";
import { fetchEmitents, fetchDeleteEmitent, fetchEmitentById } from '../actions/emitents'


const initialState = {
  emitents: {
    items: [],
    status: "loading"
  },
  emitent: {
    data: [],
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

    builder
      .addCase(fetchEmitentById.pending, (state) => {
        state.emitent.data = [];
        state.emitent.status = "loading";
      })
      .addCase(fetchEmitentById.fulfilled, (state, action) => {
        state.emitent.data = action.payload;
        state.emitent.status = "loaded";
      })
      .addCase(fetchEmitentById.rejected, (state) => {
        state.emitent.data = [];
        state.emitent.status = "error";
      });
    // Действия для удаления эмитента
    builder.addCase(fetchDeleteEmitent.pending, (state, action) => {
      const postIdToRemove = action.meta.arg;
      state.emitents.items = state.emitents.items.filter((obj) => obj._id !== postIdToRemove);
    });
  },
});


export const emitentsReducer = emitentsSlice.reducer