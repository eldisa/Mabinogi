import React, { useState } from "react";
import { useColorAnimation } from "../hooks/useColorAnimation";
import { getColor } from "../utils/colorUtils";

interface PreviewProps {
    mode: number;
    color1: number;
    color2: number;
    level: number;
    colorCode: string;
    setColorCode: (value: string) => void;
}

const Preview: React.FC<PreviewProps> = ({
    mode,
    color1,
    color2,
    level,
    colorCode,
    setColorCode,
}) => {
    const [background, setBackground] = useState(() => getColor(color1));

    useColorAnimation({
        mode,
        color1,
        color2,
        level,
        setBackground,
        setColorCode,
    });

    const handleColorCodeClick = () => {
        navigator.clipboard
            .writeText(colorCode)
            .catch((err) => console.error("Failed to copy color code:", err));
    };

    return (
        <div>
            <div
                id="preview"
                style={{
                    width: 200,
                    height: 200,
                    background,
                    border: "1px solid #ccc",
                    transition: mode === 5 ? "background-color 0.3s" : "none",
                }}
            />
            <input
                type="text"
                id="colorCode"
                value={colorCode}
                readOnly
                onClick={handleColorCodeClick}
                style={{
                    marginTop: "8px",
                    padding: "4px 8px",
                    cursor: "pointer",
                }}
                title="Click to copy color code"
            />
        </div>
    );
};

export default Preview;
