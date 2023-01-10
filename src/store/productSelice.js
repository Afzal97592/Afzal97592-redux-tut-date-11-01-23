import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

 export const STATUSES = Object.freeze(
    {
        IDLE: 'idle',
        ERROR: 'error',
        LOADING: 'loading...',
    }
)


const productSelice = createSlice({
    name:'product',
    initialState:{
        data :[],
        status:STATUSES.IDLE,
    },
    reducers:{
        // setProducts(state, action){
        //    state.data = action.payload;
        // },

        // setStatus(state, action){
        //     state.status= action.payload;
        //  }

        // we are commenting for use fetch asyncThunk
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state, action)=>{
            state.status = STATUSES.LOADING
        })
        .addCase(fetchProducts.fulfilled, (state,action)=>{
            state.data = action.payload
            state.status = STATUSES.IDLE
        })
        .addCase(fetchProducts.rejected, (state, action)=>[
            state.status = STATUSES.ERROR          
        ])
    }
})


export const {setProducts, setStatus} = productSelice.actions;
export default productSelice.reducer;

// Thunks -> is a MiddleWare inside the redux sothun use to fetch the api becouse we cant fetch the api inside the reducers becouse reducers is the pure funtion and api frtching is the async operation so thats why we cant use the async peocess inside the reducer 

// so we will use the the thunk middleWare for fetching the data




// export function fetchProducts(){
//     return async function fetchProductThunk(dispatch, getState){
//         dispatch(setStatus(STATUSES.LOADING));

//         // const prop = getState().propName which prop you want to get

//         try {
//             const res = await fetch('https://fakestoreapi.com/products')
//             const data = await res.json();

//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUSES.IDLE))
//         } catch (error) {
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }



export const fetchProducts = createAsyncThunk('products/fetch', async()=>{

    const res = await fetch('https://fakestoreapi.com/products')
    const data =  await res.json()

    return data;

})