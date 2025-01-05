import colors from "../data/colors";
import { toHex } from "./utils";

export const getColor = (idx: number) => `#${colors[idx].hex}`;

export const generateColorCode = (
    mode: number,
    level: number,
    color1: number,
    color2: number
): string => {
    if (mode == 1) return `00${colors[color1].hex}`;

    if (mode == 2) return `00${colors[color2].hex}`;

    const c1Hex = toHex(color1);
    const c2Hex = toHex(color2);
    return `${mode}${level}00${c2Hex}${c1Hex}`;
};
