import axios from "../../axios";

export const fetchHolders = createAsyncThunk("holders/fetchHolders", async () => {
    const { data } = await axios.get("/holders");
    return data;
})

export const fetchDeleteEmitent = createAsyncThunk("holders/fetchDeleteEmitent", async (id) => {
    await axios.delete(`/holders/${id}`);
})