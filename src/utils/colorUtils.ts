import colors from "../data/colors";

export const getColor = (idx: number) => `#${colors[idx].hex}`;

export const generateColorCode = (
    mode: number,
    level: number,
    color1: number,
    color2: number
): string => {
    const c1Hex = color1 < 16 ? `0${color1.toString(16)}` : color1.toString(16);
    const c2Hex = color2 < 16 ? `0${color2.toString(16)}` : color2.toString(16);
    return `${mode}${level}00${c2Hex}${c1Hex}`;
};
