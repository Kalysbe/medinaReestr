import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const { data } = await axios.get("/emitents");
    return data;
})

export const fetchTags = createAsyncThunk("posts/fetchTags", async () => {
    const { data } = await axios.get("/tags");
    return data;
})

export const fetchRemovePost = createAsyncThunk("posts/fetchRemovePost", async (id) => {
    await axios.delete(`/posts/${id}`);
})

const initialState = {
    posts: {
        items: [],
        status: "loading"
    },
    tags: {
        items: [],
        status: "loading"
    }
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // Действия для получения постов
      builder
        .addCase(fetchPosts.pending, (state) => {
          state.posts.items = [];
          state.posts.status = "loading";
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.posts.items = action.payload;
          state.posts.status = "loaded";
        })
        .addCase(fetchPosts.rejected, (state) => {
          state.posts.items = [];
          state.posts.status = "error";
        });
  
      // Действия для получения тегов
      builder
        .addCase(fetchTags.pending, (state) => {
          state.tags.items = [];
          state.tags.status = "loading";
        })
        .addCase(fetchTags.fulfilled, (state, action) => {
          state.tags.items = action.payload;
          state.tags.status = "loaded";
        })
        .addCase(fetchTags.rejected, (state) => {
          state.tags.items = [];
          state.tags.status = "error";
        });
  
      // Действия для удаления поста
      builder.addCase(fetchRemovePost.pending, (state, action) => {
        const postIdToRemove = action.meta.arg;
        state.posts.items = state.posts.items.filter((obj) => obj._id !== postIdToRemove);
      });
    },
  });
  

export const postsReducer = postsSlice.reducer