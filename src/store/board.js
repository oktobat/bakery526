import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name:"boards",
  initialState:{
    notice : [], // [ {writer:"", subject:"", content:"", date:"", hit:0} ]
  },
  reducers : {
    initNotice(state, action){
      state.notice.unshift(action.payload)
      console.log(state.notice)
    }
  }
})

export const { initNotice } = boardSlice.actions;

export default boardSlice.reducer;