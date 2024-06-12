import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEmissionsByEmitentId = createAsyncThunk("emitents/fetchEmissionsByEmitentId", async (hid) => {
    const { data } = await axios.get(`/emitents/${hid}/emissions`);
    return data;
  })

export const fetchEmissionsByHolderId = createAsyncThunk("emitents/fetchEmissionsByHolderId", async (hid) => {
  const { data } = await axios.get(`/holders/${hid}/emissions`);
  return data;
})
