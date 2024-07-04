import { configureStore } from '@reduxjs/toolkit';
import productReducer from '@/store/product'
import memberReducer from '@/store/member'

const store = configureStore({
    reducer : {
      products : productReducer,
      members : memberReducer
    }
})

export default store; 