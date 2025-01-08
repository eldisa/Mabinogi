import React, { useState } from "react";
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
    const [showColorBlock, setShowColorBlock] = useState(true);
    const { mode } = props;
    //const shift = parseInt(props.colorCode.charAt(1)); //get shift from colorCode[1]
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
                <Preview
                    mode={props.mode}
                    color1={props.color1}
                    color2={props.color2}
                    level={props.level}
                    colorCode={props.colorCode}
                    setColorCode={props.setColorCode}
                />
                <ColorPicker
                    color1={props.color1}
                    color2={props.color2}
                    mode={props.mode}
                    level={props.level}
                    setColor1={props.setColor1}
                    setColor2={props.setColor2}
                    setMode={props.setMode}
                    setLevel={props.setLevel}
                    startIndex={0}
                    setStartIndex={props.setStartIndex}
                />
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
                    {showColorBlock && <ColorArrayDisplay />}
                </Stack>
            )}
        </Stack>
    );
};
