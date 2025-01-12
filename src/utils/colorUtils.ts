import colors from "../data/colors";
import { toHex } from "./utils";

export const getColor = (index: number): string => {
    const safeIndex = Math.min(Math.max(0, index), colors.length - 1);
    return `#${colors[safeIndex].hex}`;
};

export const generateGradientArray = (
    startColorIndex: number,
    endColorIndex: number,
    customSteps?: number
): string[] => {
    const startColor = colors[startColorIndex].hex;
    const endColor = colors[endColorIndex].hex;

    const result: string[] = [];
    const steps = Math.max(customSteps || 15, 0);

    const r = parseInt(startColor.substring(0, 2), 16);
    const g = parseInt(startColor.substring(2, 4), 16);
    const b = parseInt(startColor.substring(4, 6), 16);

    const endR = parseInt(endColor.substring(0, 2), 16);
    const endG = parseInt(endColor.substring(2, 4), 16);
    const endB = parseInt(endColor.substring(4, 6), 16);

    for (let i = 0; i < steps; i++) {
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
    switch (mode) {
        case 4:
        case 5:
        case 8: {
            const [startIndex, endIndex] =
                mode === 4
                    ? [color1Index, color2Index]
                    : [color2Index, color1Index];

            const gradientArray = generateGradientArray(startIndex, endIndex);
            const safeEndColor = Math.min(
                Math.max(0, endIndex),
                colors.length - 1
            );
            const startColorHex = colors[startIndex].hex;
            const endColorHex = colors[safeEndColor].hex;
            const result =
                shift === 0
                    ? [startColorHex, ...gradientArray.slice(1), endColorHex]
                    : [...gradientArray, endColorHex];

            return result;
        }
        case 6: {
            const gradientArray = generateGradientArray(
                color1Index,
                color2Index,
                6
            );
            const startColorHex = colors[color1Index].hex;
            const endColorHex = colors[color2Index].hex;
            const array = [startColorHex, ...gradientArray, endColorHex];
            const reverseArray = array.slice().reverse();
            return [...array, ...reverseArray];
        }
        // Add more cases here for additional modes
        default:
            return [];
    }
};

export const generateColorCode = (
    mode: number,
    shift: number,
    level: number,
    startIndex: number,
    color1: number,
    color2: number
): string => {
    const modeHex = toHex(mode, true);
    const shiftHex = toHex(shift, true);
    const levelHex = toHex(level, true);
    const startIndexHex = toHex(startIndex, true);
    const color1Hex = toHex(color1);
    const color2Hex = toHex(color2);

    return `${modeHex}${shiftHex}${levelHex}${startIndexHex}${color1Hex}${color2Hex}`;
};
