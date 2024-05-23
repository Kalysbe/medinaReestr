import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCardEmitent = createAsyncThunk("prints/fetchCardEmitent", async (id) => {
  const { data } = await axios.get(`/prints/emitent/${id}/card`);
  return data;
})

export const fetchExtractReestr = createAsyncThunk("prints/fetchExtractReestr", async ({eid, hid}) => {
  const { data } = await axios.get(`/prints/emitent/${eid}/reestr/${hid}`);
  return data;
})


