import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchcloData = createAsyncThunk('fetchcloData' , async ()=>{
  const response = await fetch('https://closet-recruiting-api.azurewebsites.net/api/data')
  return response.json()
})
const cloSlice = createSlice({
    name : "clo",
    initialState : {
        isLoading: false,
        data : null,
        isError : false,
    },
    reducers: {
        paidCloProducts: (state) => {
          state.data = state.data.filter(item => item.pricingOption === 0);
        },
        freeCloProducts:(state)=>{
            state.data = state.data.filter(item => item.pricingOption === 1);
        },
        viewOnlyCloProducts:(state)=>{
            state.data = state.data.filter(item => item.pricingOption === 2);
        },

      },
    extraReducers : (builder) =>{
        builder.addCase(fetchcloData.pending ,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchcloData.fulfilled , (state,action)=>{
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchcloData.rejected ,(state,action)=>{
            console.log('it is an error ', action.payload)
            state.isError = true
        })
    }
})
export const { paidCloProducts } = cloSlice.actions;
export const { freeCloProducts } = cloSlice.actions;
export const { viewOnlyCloProducts } = cloSlice.actions;
export default cloSlice.reducer;