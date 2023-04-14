//TEST PAGE/////////////////

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// import goalService from './goalService'



export const goalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers:{},
    extraReducers: (builder) => {}
})

export const {reset} = goalsSlice.actions
export default goalsSlice.reducer