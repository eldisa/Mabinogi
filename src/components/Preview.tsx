import React, { useState } from "react";
import { Paper, TextField, Stack } from "@mui/material";
import { useColorAnimation } from "../hooks/useColorAnimation";

interface PreviewProps {
    colorCode: string;
    setColorCode: (value: string) => void;
}

const Preview: React.FC<PreviewProps> = ({ colorCode, setColorCode }) => {
    const [background, setBackground] = useState(() => "#000000");

    const mode = parseInt(colorCode[0], 10);
    const shiftStep = parseInt(colorCode[1], 10);
    const level = parseInt(colorCode[2], 10);
    const startIndex = parseInt(colorCode[3], 10);
    const color1 = parseInt(colorCode.slice(4, 6), 16);
    const color2 = parseInt(colorCode.slice(6, 8), 16);

    useColorAnimation({
        mode,
        shiftStep,
        level,
        startIndex,
        color1,
        color2,
        setBackground,
        setColorCode,
    });

    const handleColorCodeClick = () => {
        navigator.clipboard
            .writeText(colorCode)
            .catch((err) => console.error("Failed to copy color code:", err));
    };

    return (
        <Stack spacing={2} alignItems="center">
            <Paper
                elevation={3}
                sx={{
                    width: 300,
                    height: 300,
                    background: background,
                    // transition: mode === 5 ? "background-color 0.3s" : "none",
                }}
            />
            <TextField
                value={colorCode}
                onClick={handleColorCodeClick}
                InputProps={{
                    readOnly: true,
                }}
                fullWidth
                helperText="Click to copy color code"
                sx={{ width: 300 }}
            />
        </Stack>
    );
};

export default Preview;
