import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin : false
}

export const UserReducer = createSlice({
    name : "user",
    initialState,
    reducers : {
        loginHandler : (state , action)=>{
            state.isLogin = true
            state.token = action.payload
        }
    }
})


export const {loginHandler} = UserReducer.actions
export default UserReducer.reducer