import { configureStore } from '@reduxjs/toolkit';
import productReducer from '@/store/product'
import memberReducer from '@/store/member'
import boardReducer from '@/store/board'

const store = configureStore({
    reducer : {
      products : productReducer,
      members : memberReducer,
      boards : boardReducer
    }
})

export default store; 