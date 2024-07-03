import { configureStore } from '@reduxjs/toolkit';
import productReducer from '@/store/product'

const store = configureStore({
    reducer : {
      products : productReducer
    }
})

export default store; 