import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorState {
    colorArray: string[];
    startIndex: number;
    savedColorCode: {
        single: string[];
        shiny: string[];
    };
}

const initialState: ColorState = {
    colorArray: [],
    startIndex: 0,
    savedColorCode: {
        single: [],
        shiny: [],
    },
};

const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        setColorArray: (state, action: PayloadAction<string[]>) => {
            state.colorArray = action.payload;
        },
        setStartIndex: (state, action: PayloadAction<number>) => {
            state.startIndex = action.payload;
        },
        setSingleColorCode: (state, action: PayloadAction<string[]>) => {
            state.savedColorCode.single = action.payload;
        },
        setShinyColorCode: (state, action: PayloadAction<string[]>) => {
            state.savedColorCode.shiny = action.payload;
        },
    },
});

export const {
    setColorArray,
    setStartIndex,
    setSingleColorCode,
    setShinyColorCode,
} = colorSlice.actions;
export default colorSlice.reducer;
