import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/counterSlice';
import checklistReducer from './Slices/checklistSlice';

export default configureStore({
  reducer: {
    counterReducer,
    checklistReducer
  },
})