import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Stack, FormControlLabel, Checkbox } from "@mui/material";
import { ColorArrayDisplay } from "./ColorArrayDisplay";
import ColorPicker from "./ColorPicker";
import Preview from "./Preview";
import { ANIMATION_MODES, DEFAULTS } from "../utils/constants";
import { generateColorCode } from "../utils/colorUtils";

export const ColorPickerContent: React.FC = () => {
    const { colorArray } = useSelector((state: RootState) => state.color);
    const [showColorBlock, setShowColorBlock] = React.useState(true);
    const [mode, setMode] = useState(DEFAULTS.MODE as number);
    const [shiftStep, setShiftStep] = useState(DEFAULTS.SHIFT_STEP as number);
    const [color1, setColor1] = useState(DEFAULTS.COLOR_1 as number);
    const [color2, setColor2] = useState(DEFAULTS.COLOR_2 as number);
    const [level, setLevel] = useState(DEFAULTS.LEVEL as number);
    const [startIndex, setStartIndex] = useState(
        DEFAULTS.START_INDEX as number
    );
    const [colorCode, setColorCode] = useState("10000000");
    const { FIXED_COLOR_1, FIXED_COLOR_2 } = ANIMATION_MODES;
    const isShinyMode = mode !== FIXED_COLOR_1 && mode !== FIXED_COLOR_2;

    useEffect(() => {
        const newColorCode = generateColorCode(
            mode,
            shiftStep,
            level,
            startIndex,
            color1,
            color2
        );
        setColorCode(newColorCode);
    }, [mode, shiftStep, level, startIndex, color1, color2, setColorCode]);

    return (
        <Stack>
            <Stack
                direction="row"
                spacing={6}
                justifyContent="center"
                alignItems="flex-start"
            >
                <Preview colorCode={colorCode} setColorCode={setColorCode} />
                <ColorPicker
                    {...{
                        color1,
                        color2,
                        mode,
                        level,
                        startIndex,
                        shiftStep,
                        setColor1,
                        setColor2,
                        setMode,
                        setLevel,
                        setStartIndex,
                        setShiftStep,
                    }}
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
                    {showColorBlock && (
                        <ColorArrayDisplay colorArray={colorArray} />
                    )}
                </Stack>
            )}
        </Stack>
    );
};
