import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching data
export const fetchCollections = createAsyncThunk('products/fetchData', async () => {
   
        const response = await axios.get('https://www.api.indiapharmassist.com/api/v1/AllCategoreys');
        return response.data.data;
    
});

// Initial state
const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

// Create a slice
const fetchCollectionsSlice = createSlice({
    name: 'Collections',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollections.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCollections.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchCollections.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});


export default fetchCollectionsSlice.reducer;
