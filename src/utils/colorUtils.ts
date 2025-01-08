import colors from "../data/colors";
import { toHex } from "./utils";

export const getColor = (idx: number): string => {
    if (idx < 0 || idx >= colors.length) {
        console.warn(`Invalid color index: ${idx}, defaulting to black`);
        return "#000000";
    }
    return `#${colors[idx].hex}`;
};

const generateGradientArray = (
    color1Index: number,
    color2Index: number,
    length: number = 15
) => {
    // Ensure indices are within bounds
    const safeColor1Index = Math.min(
        Math.max(0, color1Index),
        colors.length - 1
    );
    const safeColor2Index = Math.min(
        Math.max(0, color2Index),
        colors.length - 1
    );

    const color1 = parseInt(colors[safeColor1Index].hex, 16);
    const color2 = parseInt(colors[safeColor2Index].hex, 16);

    const r1 = (color1 >> 16) & 255;
    const g1 = (color1 >> 8) & 255;
    const b1 = color1 & 255;

    const r2 = (color2 >> 16) & 255;
    const g2 = (color2 >> 8) & 255;
    const b2 = color2 & 255;

    const gradientArray = [];

    for (let i = 0; i < length; i++) {
        const ratio = i / (length - 1);
        const r = Math.round(r1 + (r2 - r1) * ratio);
        const g = Math.round(g1 + (g2 - g1) * ratio);
        const b = Math.round(b1 + (b2 - b1) * ratio);

        const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
        gradientArray.push(hex);
    }

    return gradientArray;
};
/*
mode:
4: c1 gradient to c2 by 16 steps
5: c2 gradient to c1 by 16 steps
6 7 8 9: to be updated
*/
export const generateColorArray = (
    mode: number,
    shift: number,
    color1Index: number,
    color2Index: number
) => {
    if (mode === 4 || mode === 5) {
        const [startColor, endColor] =
            mode === 4
                ? [color1Index, color2Index]
                : [color2Index, color1Index];

        const gradientArray = generateGradientArray(startColor, endColor);
        const safeEndColor = Math.min(Math.max(0, endColor), colors.length - 1);
        const safeStartColor = Math.min(
            Math.max(0, startColor),
            colors.length - 1
        );

        if (shift === 0) {
            return [...gradientArray, colors[safeEndColor].hex];
        }

        const safeShift = Math.min(
            Math.max(0, shift),
            gradientArray.length - 1
        );
        const rotated = [
            ...gradientArray.slice(safeShift),
            ...gradientArray.slice(0, safeShift),
        ];
        return [
            colors[safeStartColor].hex,
            ...rotated,
            colors[safeEndColor].hex,
        ];
    }

    return [];
};

export const generateColorCode = (
    mode: number,
    level: number,
    color1: number,
    color2: number,
    shift: number = 0,
    startIndex: number = 0
): string => {
    if (mode < 1 || mode > 7) {
        console.warn(`Invalid mode: ${mode}, defaulting to 1`);
        mode = 1;
    }

    if (level < 0 || level > 9) {
        console.warn(`Invalid level: ${level}, defaulting to 0`);
        level = 0;
    }

    // Ensure color indices are within bounds
    const safeColor1 = Math.min(Math.max(0, color1), colors.length - 1);
    const safeColor2 = Math.min(Math.max(0, color2), colors.length - 1);
    const safeShift = Math.min(Math.max(0, shift), 15);
    const safeStartIndex = Math.min(Math.max(0, startIndex), 15);

    const c1Hex = toHex(safeColor1);
    const c2Hex = toHex(safeColor2);
    const shiftHex = toHex(safeShift);
    const startHex = toHex(safeStartIndex);

    if (mode === 1) return `1${shiftHex}${level}${startHex}${c2Hex}${c1Hex}`;
    if (mode === 2) return `2${shiftHex}${level}${startHex}${c2Hex}${c1Hex}`;

    return `${mode}${shiftHex}${level}${startHex}${c2Hex}${c1Hex}`;
};
