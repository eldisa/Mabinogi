import React, { useState, useEffect } from "react";
import colors from "../data/colors";
import { toHex } from "./../utils/utils";
import { DEFAULTS } from "../utils/constants";

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

export const ColorArrayDisplay: React.FC = () => {
    const [colorArray, setColorArray] = useState<string[]>([]);
    const [shift, setShift] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => {
                setShift((prev) => (prev + 1) % 15);
            },
            500 / (DEFAULTS.LEVEL + 1)
        );

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const array = generateGradientArray(DEFAULTS.COLOR_1, DEFAULTS.COLOR_2);
        setColorArray(array);
    }, [shift]);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">
                Color Animation Array
            </h3>
            <div className="flex gap-1 overflow-x-auto p-2">
                {colorArray.map((color, index) => (
                    <div key={index} className="flex-shrink-0">
                        <div
                            className="w-8 h-8 border border-gray-200 rounded"
                            style={{ backgroundColor: `#${color}` }}
                        />
                        <div className="text-xs text-center mt-1">{index}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
