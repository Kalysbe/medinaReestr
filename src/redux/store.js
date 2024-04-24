import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth';
import { emitentsReducer } from './slices/emitents';
import { holdersReducer } from './slices/holders';

const store = configureStore({
    reducer: {
        auth: authReducer,
        emitents: emitentsReducer,
        holders: holdersReducer,
    }
})

export default store;