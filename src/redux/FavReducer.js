import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites : {}
}

export const FavReducer = createSlice({
    name : "favourite",
    initialState,
    reducers : {
        addToFav : (state , action)=>{
            const favouriteTarget = action.payload
            state.favourites = {...state.favourites , [favouriteTarget.id] : favouriteTarget}
        }
    }
})

export const {addToFav} = FavReducer.actions
export default FavReducer.reducer
