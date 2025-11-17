// Dùng @reduxjs/toolkit để tạo store, 
// Bao gồm Redux DevTools
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

const store = configureStore({
    // Tự động bật Redux DevTools
    reducer: rootReducer,
})

export default store;