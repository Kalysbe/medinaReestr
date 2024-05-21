import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCardEmitent = createAsyncThunk("prints/fetchCardEmitent", async (id) => {
  const { data } = await axios.get(`/prints/emitent/${id}/card`);
  return data;
})
