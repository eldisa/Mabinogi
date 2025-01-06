import colors from "../data/colors";
import { toHex } from "./utils";

export const getColor = (idx: number): string => {
    // Add bounds checking
    if (idx < 0 || idx >= colors.length) {
        console.warn(`Invalid color index: ${idx}, defaulting to black`);
        return '#000000';
    }
    return `#${colors[idx].hex}`;
};

export const generateColorCode = (
    mode: number,
    level: number,
    color1: number,
    color2: number
): string => {
    // Validate inputs
    if (mode < 1 || mode > 7) {
        console.warn(`Invalid mode: ${mode}, defaulting to 1`);
        mode = 1;
    }
    
    if (level < 0 || level > 9) {
        console.warn(`Invalid level: ${level}, defaulting to 0`);
        level = 0;
    }

    if (mode === 1) return `00${colors[color1]?.hex || '000000'}`;
    if (mode === 2) return `00${colors[color2]?.hex || '000000'}`;

    const c1Hex = toHex(color1);
    const c2Hex = toHex(color2);
    return `${mode}${level}00${c2Hex}${c1Hex}`;
};