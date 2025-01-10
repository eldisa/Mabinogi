// filepath: /c:/Users/User/WebstormProjects/mabinogi/src/features/colorSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorState {
    colorArray: string[];
    startIndex: number;
}

const initialState: ColorState = {
    colorArray: [],
    startIndex: 0,
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
    },
});

export const { setColorArray, setStartIndex } = colorSlice.actions;
export default colorSlice.reducer;
