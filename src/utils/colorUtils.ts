import colors from "../data/colors";
import { toHex } from "./utils";

export const getColor = (index: number): string => {
    const safeIndex = Math.min(Math.max(0, index), colors.length - 1);
    return `#${colors[safeIndex].hex}`;
};

export const generateGradientArray = (
    startColorIndex: number,
    endColorIndex: number
): string[] => {
    const startColor = colors[startColorIndex].hex;
    const endColor = colors[endColorIndex].hex;

    const result: string[] = [];
    const steps = 15;

    for (let i = 0; i <= steps; i++) {
        const r = parseInt(startColor.substring(0, 2), 16);
        const g = parseInt(startColor.substring(2, 4), 16);
        const b = parseInt(startColor.substring(4, 6), 16);

        const endR = parseInt(endColor.substring(0, 2), 16);
        const endG = parseInt(endColor.substring(2, 4), 16);
        const endB = parseInt(endColor.substring(4, 6), 16);

        const newR = Math.round(r + (endR - r) * (i / steps));
        const newG = Math.round(g + (endG - g) * (i / steps));
        const newB = Math.round(b + (endB - b) * (i / steps));

        result.push(`${toHex(newR)}${toHex(newG)}${toHex(newB)}`);
    }

    return result;
};

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

        const safeShift = Math.min(
            Math.max(0, shift),
            gradientArray.length - 1
        );
        const rotated = [
            ...gradientArray.slice(safeShift),
            ...gradientArray.slice(0, safeShift),
        ];

        return [...rotated, colors[safeEndColor].hex];
    }

    return [];
};

export const generateColorCode = (
    mode: number,
    level: number,
    color1: number,
    color2: number
): string => {
    const modeHex = toHex(mode);
    const levelHex = toHex(level);
    const color1Hex = toHex(color1);
    const color2Hex = toHex(color2);

    return `${modeHex}${levelHex}${color1Hex}${color2Hex}`;
};
