import { createSlice } from '@reduxjs/toolkit';

const memberSlice = createSlice({
  name : 'members',
  initialState : {
    members : [],  // [ {userEmail, userPw, userName, userPhone, zipCode, addr1, addr2}, ...]
    user : null   // {userEmail, userPw, userName, userPhone, zipCode, addr1, addr2}
  },
  reducers : {
    addMember(state, action){
      state.members.push(action.payload)
    },
    userLogin(state, action){
      const {userEmail, userPw} = action.payload
      const findUser = state.members.find(item=>item.userEmail==userEmail && item.userPw==userPw)
      state.user = findUser ? findUser : null
    },
    userLogout(state, action){
      state.user = null
    }
  }
})

export const { addMember, userLogin, userLogout } = memberSlice.actions;

export default memberSlice.reducer;