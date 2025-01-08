import React, { useEffect, useState } from "react";
import { generateColorArray } from "../utils/colorUtils";
import { DEFAULTS } from "../utils/constants";

const { MODE, COLOR_1, COLOR_2 } = DEFAULTS;

interface ColorArrayDisplayParam {
    mode: number;
    shiftOutside: number;
    color1: number;
    color2: number;
}

export const ColorArrayDisplay: React.FC<ColorArrayDisplayParam> = ({
    mode = MODE,
    shiftOutside = 0,
    color1 = COLOR_1,
    color2 = COLOR_2,
}) => {
    const [colorArray, setColorArray] = useState<string[]>([]);
    const [shift, setShift] = useState(shiftOutside);

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
        const array = generateColorArray(mode, shift, color1, color2);
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

export default ColorArrayDisplay;
