import  { configureStore } from '@reduxjs/toolkit'
import Productreducers from '../Slices/ProductSlices'
import Collectionsreducers from '../Slices/ProductsCollectionsSlice'
import cartReducers from '../Slices/AddtoCartslice'


export const store = configureStore({
    reducer:{
        Products:Productreducers,
        Collections: Collectionsreducers,
        cartReducers:cartReducers
       }
})

