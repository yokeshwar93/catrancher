import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {Cat, CatRancher, CatsList, Clowder} from "../../models/modelTypes";

const initialState: CatRancher = {
    catsList: [],
    selectedCats: [],
    isFetchingCatsList: true,
    clowders: {
        1: [],
        2: [],
        3: [],
        4: [],
    },
    clowdersFound: 0
};

export const catRancherSlice = createSlice({
    name: 'catRancher',
    initialState,
    reducers: {

        updateCatsList: (state, action: PayloadAction<Array<CatsList>>) => {
            state.catsList = action.payload;
            state.isFetchingCatsList = false;
        },

        updateSelectedCats: (state, action: PayloadAction<Array<Cat>>) => {
            state.selectedCats = action.payload;
        },

        updateClowders: (state, action: PayloadAction<Clowder>) => {
            state.clowders = action.payload;
        },

        updateClowdersCount: (state, action: PayloadAction<number>) => {
            state.clowdersFound = action.payload;
        }

    },


});

export const { updateCatsList, updateSelectedCats, updateClowders, updateClowdersCount } = catRancherSlice.actions;

export const selectCatsList = (state: RootState) => state.catRancher.catsList;
export const selectIsFetchingCatsList = (state: RootState) => state.catRancher.isFetchingCatsList;
export const getSelectedCats = (state: RootState) => state.catRancher.selectedCats;
export const selectClowders = (state: RootState) => state.catRancher.clowders;
export const selectFoundClowders = (state: RootState) => state.catRancher.clowdersFound;


export default catRancherSlice.reducer;
