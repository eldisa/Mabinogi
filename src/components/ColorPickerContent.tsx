import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Stack, FormControlLabel, Checkbox } from "@mui/material";
import { ColorArrayDisplay } from "./ColorArrayDisplay";
import ColorPicker from "./ColorPicker";
import Preview from "./Preview";
import { ANIMATION_MODES } from "../utils/constants";

interface ColorPickerContentProps {
    color1: number;
    color2: number;
    mode: number;
    level: number;
    startIndex: number;
    setColor1: (value: number) => void;
    setColor2: (value: number) => void;
    setMode: (value: number) => void;
    setLevel: (value: number) => void;
    colorCode: string;
    setColorCode: (value: string) => void;
    setStartIndex: (value: number) => void;
}

export const ColorPickerContent: React.FC<ColorPickerContentProps> = (
    props
) => {
    const { colorArray } = useSelector((state: RootState) => state.color);
    const [showColorBlock, setShowColorBlock] = React.useState(true);
    const { mode } = props;
    const { FIXED_COLOR_1, FIXED_COLOR_2 } = ANIMATION_MODES;
    const isShinyMode = mode !== FIXED_COLOR_1 && mode !== FIXED_COLOR_2;

    return (
        <Stack>
            <Stack
                direction="row"
                spacing={6}
                justifyContent="center"
                alignItems="flex-start"
            >
                <Preview {...props} />
                <ColorPicker {...props} />
            </Stack>
            {isShinyMode && (
                <Stack>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={showColorBlock}
                                onChange={(e) =>
                                    setShowColorBlock(e.target.checked)
                                }
                            />
                        }
                        label="顯示顏色塊"
                    />
                    {showColorBlock && (
                        <ColorArrayDisplay colorArray={colorArray} />
                    )}
                </Stack>
            )}
        </Stack>
    );
};
