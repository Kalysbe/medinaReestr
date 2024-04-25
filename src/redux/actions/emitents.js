import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEmitents = createAsyncThunk("emitents/fetchEmitents", async () => {
    const { data } = await axios.get("/emitents");
    return data;
})

export const fetchEmitentById = createAsyncThunk("emitents/fetchEmitentById", async (id) => {
  const { data } = await axios.get(`/emitents/${id}`);
  return data;
})

export const fetchDeleteEmitent = createAsyncThunk("emitents/fetchDeleteEmitent", async (id) => {
    await axios.delete(`/emitents/${id}`);
})