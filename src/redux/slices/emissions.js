import { createSlice } from "@reduxjs/toolkit";
import { fetchEmissionsByHolderId , fetchEmissionsByEmitentId , fetchEmissionById} from '../actions/emissions'


const initialState = {
  emissions: {
    items: [],
    status: "loading"
  },
  emissionDetail: {
    data: {},
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
      builder
      .addCase(fetchEmissionById.pending, (state) => {
        state.emissionDetail.data = {};
        state.emissionDetail.status = "loading";
      })
      .addCase(fetchEmissionById.fulfilled, (state, action) => {
        state.emissionDetail.data = action.payload;
        state.emissionDetail.status = "loaded";
      })
      .addCase(fetchEmissionById.rejected, (state) => {
        state.emissionDetail.data = {};
        state.emissionDetail.status = "error";
      });
  },
});


export const emissionsReducer = emissionsSlice.reducer