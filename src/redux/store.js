import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './slices/emitents';
import { authReducer } from './slices/auth';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authReducer
    }
})

export default store;