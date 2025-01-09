import React, { useState, useEffect } from "react";
import colors from "../data/colors";
import { generateGradientArray } from "./../utils/colorUtils";
import { DEFAULTS } from "../utils/constants";

export const getColor = (index: number): string => {
    const safeIndex = Math.min(Math.max(0, index), colors.length - 1);
    return `#${colors[safeIndex].hex}`;
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
