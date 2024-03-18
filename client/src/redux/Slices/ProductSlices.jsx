import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching data
export const fetchData = createAsyncThunk('products/fetchData', async () => {
   
        const response = await axios.get('https://www.api.indiapharmassist.com/api/v1/all-products');
        console.log("Products:resposne",response)
        return response.data.data;
    
});

// Initial state
const initialState = {
    data: [],
    status: 'idle',
    error: null,
};

// Create a slice
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});


export default productsSlice.reducer;
