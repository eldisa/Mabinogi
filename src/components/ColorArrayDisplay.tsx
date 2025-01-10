import React from "react";

interface ColorArrayDisplayProps {
    colorArray: string[];
}

export const ColorArrayDisplay: React.FC<ColorArrayDisplayProps> = ({
    colorArray,
}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">
                Color Animation Array
            </h3>
            <div className="flex gap-1 overflow-x-auto p-2">
                {colorArray.length > 0 &&
                    colorArray.map((color, index) => (
                        <div key={index} className="flex-shrink-0">
                            <div
                                className="w-8 h-8 border border-gray-200 rounded"
                                style={{ backgroundColor: `#${color}` }}
                            />
                            <div className="text-xs text-center mt-1">
                                {index}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
