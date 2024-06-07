import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCreateTransaction = createAsyncThunk("transactions/fetchCreateTransaction", async (data) => {
    const response = await axios.post("/transactions", data);
    return response.data;
})

export const fetchOperationTypes = createAsyncThunk("transactions/fetchOperationTypes", async () => {
    const { data } = await axios.get("/transactions/operations");
    return data;
})


// export const fetchDeleteEmitent = createAsyncThunk("holders/fetchDeleteEmitent", async (id) => {
//     await axios.delete(`/holders/${id}`);
// })