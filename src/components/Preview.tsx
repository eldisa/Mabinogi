import React, { useState } from "react";
import { Paper, TextField, Stack } from "@mui/material";
import { useColorAnimation } from "../hooks/useColorAnimation";

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
    const [background, setBackground] = useState(() => "#000000");

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
        <Stack spacing={2} alignItems="center">
            <Paper
                elevation={3}
                sx={{
                    width: 300,
                    height: 300,
                    background: background,
                    transition: mode === 5 ? "background-color 0.3s" : "none",
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
