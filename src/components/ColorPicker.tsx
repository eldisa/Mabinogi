import React from "react";
import { Stack, Slider, Typography } from "@mui/material";
import ColorSelect from "./ColorSelect";
import ModeSelect from "./ModeSelect";

interface ColorPickerProps {
    color1: number;
    color2: number;
    mode: number;
    level: number;
    setColor1: (value: number) => void;
    setColor2: (value: number) => void;
    setMode: (value: number) => void;
    setLevel: (value: number) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
    color1,
    color2,
    mode,
    level,
    setColor1,
    setColor2,
    setMode,
    setLevel,
}) => {
    return (
        <Stack spacing={3} width="300px">
            <ColorSelect label="顏色 1" value={color1} onChange={setColor1} />
            <ColorSelect label="顏色 2" value={color2} onChange={setColor2} />
            <ModeSelect value={mode} onChange={setMode} />
            <div>
                <Typography gutterBottom>閃爍速度: {level}</Typography>
                <Slider
                    value={level}
                    min={0}
                    max={9}
                    step={1}
                    onChange={(_, value) => setLevel(value as number)}
                    marks
                    sx={{ width: "300px" }}
                />
            </div>
        </Stack>
    );
};

export default ColorPicker;
