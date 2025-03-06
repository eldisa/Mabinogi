import React, { useState, useEffect } from "react";
import {
    Stack,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { ColorPalette } from "./ColorPalette";
import { MemoryBlock } from "./MemoryBlock";
import { v4 as uuidv4 } from "uuid";

interface SavedColor {
    id: string;
    color: string;
    timestamp: number;
}

const CustomColorPicker: React.FC = () => {
    const [customColor, setCustomColor] = useState("#000000");
    const [showColorCards, setShowColorCards] = useState(true);
    const [savedColors, setSavedColors] = useState<SavedColor[]>(() => {
        const saved = localStorage.getItem("savedColors");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("savedColors", JSON.stringify(savedColors));
    }, [savedColors]);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = event.target.value;
        setCustomColor(newColor);
    };

    const handlePaletteColorSelect = (color: string) => {
        setCustomColor(color);
    };

    const handleSaveColor = () => {
        setSavedColors((prev) => [
            {
                id: uuidv4(),
                color: customColor,
                timestamp: Date.now(),
            },
            ...prev,
        ]);
    };

    const handleDeleteSavedColor = (id: string) => {
        setSavedColors((prev) => prev.filter((color) => color.id !== id));
    };

    return (
        <Stack spacing={4}>
            <Stack
                // direction={showColorCards ? "row" : "column"}
                direction={"row"}
                spacing={4}
                alignItems="flex-start"
            >
                <Stack spacing={2} alignItems="center">
                    <input
                        type="color"
                        value={customColor}
                        onChange={handleColorChange}
                        style={{
                            width: "300px",
                            height: "300px",
                            padding: 0,
                            border: "none",
                        }}
                    />
                    <TextField
                        value={customColor}
                        onChange={handleColorChange}
                        sx={{ width: "300px" }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleSaveColor}
                        sx={{ width: "300px" }}
                    >
                        Save Color
                    </Button>

                    <MemoryBlock
                        savedColors={savedColors}
                        onColorSelect={handlePaletteColorSelect}
                        onDelete={handleDeleteSavedColor}
                    />
                </Stack>
                <Stack>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={showColorCards}
                                onChange={(e) =>
                                    setShowColorCards(e.target.checked)
                                }
                            />
                        }
                        label="顯示色卡"
                    />
                    {showColorCards && (
                        <div style={{ overflow: "hidden" }}>
                            <ColorPalette
                                onColorSelect={handlePaletteColorSelect}
                            />
                        </div>
                    )}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CustomColorPicker;
