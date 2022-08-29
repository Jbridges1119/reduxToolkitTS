import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//ENUM - locks in the currency ID's
import {Currencies} from '../bitcoinTypes';

//Typed AppState to be an object with currency that uses our enum only
type AppState = {
  currency: Currencies;
}

//Add AppState type to initialState
const initialState: AppState = {
  currency: Currencies.USD
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<Currencies>) => {
      //We are mutating state - allowed with redux and will update as if we weren't
      state.currency = action.payload
    }
  }
});

//exports that slice(state) actions(setState)
export const { changeCurrency} = appSlice.actions;

export default appSlice.reducer