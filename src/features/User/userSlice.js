
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        userDetails:null
    },
    reducers:{
        updateLoginDetails:(state,action) => {
            state.userDetails = action.payload
        },
        logout:(state) => {
            state.userDetails = null
        }
    }
})
export const {updateLoginDetails,logout} = userSlice.actions

export default userSlice.reducer