import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const counterSllice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    
  },
  extraReducers : (builder)=> {

  }
  
});

export const { increment, decrement, incrementByAmount } = counterSllice.actions;
export default counterSllice.reducer;
