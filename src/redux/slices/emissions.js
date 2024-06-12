import { createSlice } from "@reduxjs/toolkit";
import { fetchEmissionsByHolderId , fetchEmissionsByEmitentId} from '../actions/emissions'


const initialState = {
  emissions: {
    items: [],
    status: "loading"
  }
}

const emissionsSlice = createSlice({
  name: "emissions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder
      .addCase(fetchEmissionsByHolderId.pending, (state) => {
        state.emissions.items = [];
        state.emissions.status = "loading";
      })
      .addCase(fetchEmissionsByHolderId.fulfilled, (state, action) => {
        state.emissions.items = action.payload;
        state.emissions.status = "loaded";
      })
      .addCase(fetchEmissionsByHolderId.rejected, (state) => {
        state.emissions.items = [];
        state.emissions.status = "error";
      });
      builder
      .addCase(fetchEmissionsByEmitentId.pending, (state) => {
        state.emissions.items = [];
        state.emissions.status = "loading";
      })
      .addCase(fetchEmissionsByEmitentId.fulfilled, (state, action) => {
        state.emissions.items = action.payload;
        state.emissions.status = "loaded";
      })
      .addCase(fetchEmissionsByEmitentId.rejected, (state) => {
        state.emissions.items = [];
        state.emissions.status = "error";
      });
  },
});


export const emissionsReducer = emissionsSlice.reducer