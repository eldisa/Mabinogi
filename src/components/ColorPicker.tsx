import React from "react";
import Slider from "@mui/material/Slider";
import colors from "../data/colors";

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
    const handleModeChange = (value: number) => {
        setMode(value); // Update state
        localStorage.setItem("mode", value.toString()); // Update localStorage
    };

    const handleColor1Change = (value: number) => {
        setColor1(value);
        localStorage.setItem("color1", value.toString());
    };

    const handleColor2Change = (value: number) => {
        console.log(value);
        setColor2(value);
        localStorage.setItem("color2", value.toString());
    };

    const handleLevelChange = (value: number) => {
        setLevel(value);
        localStorage.setItem("level", value.toString());
    };

    // useEffect(() => {
    //     const previousMode = localStorage.getItem("mode");
    //     const previousColor1 = localStorage.getItem("color1");
    //     const previousColor2 = localStorage.getItem("color2");
    //     const previousLevel = localStorage.getItem("level");

    //     if (previousMode) {
    //         setMode(parseInt(previousMode));
    //     }
    //     if (previousColor1) {
    //         setColor1(parseInt(previousColor1));
    //     }
    //     if (previousColor2) {
    //         setColor2(parseInt(previousColor2));
    //     }
    //     if (previousLevel) {
    //         setLevel(parseInt(previousLevel));
    //     }
    // }, [setColor1, setColor2, setMode, setLevel]);

    return (
        <div>
            <div>
                <label>颜色 1</label>
                <select
                    title="color1"
                    value={color1}
                    onChange={(e) =>
                        handleColor1Change(parseInt(e.target.value))
                    }
                    style={{ background: `#${color1}` }}
                >
                    {colors.map((color, index) => (
                        <option
                            key={index}
                            value={index}
                            style={{ background: `#${color.hex}` }}
                        >
                            {color.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>颜色 2</label>
                <select
                    title="color2"
                    value={color2}
                    onChange={(e) =>
                        handleColor2Change(parseInt(e.target.value))
                    }
                    style={{ background: `#${color2}` }}
                >
                    {colors.map((color, index) => (
                        <option
                            key={index}
                            value={index}
                            style={{ background: `#${color.hex}` }}
                        >
                            {color.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>闪烁模式</label>
                <select
                    title="shinyMode"
                    value={mode}
                    onChange={(e) => handleModeChange(parseInt(e.target.value))}
                >
                    <option value={1}>固定颜色 1</option>
                    <option value={2}>固定颜色 2</option>
                    <option value={4}>心跳的悸动 1</option>
                    <option value={5}>心跳的脉动 2</option>
                    <option value={6}>平稳的渐变</option>
                    <option value={7}>闪烁</option>
                </select>
            </div>
            <div>
                <label>速度级别: {level}</label>
                <Slider
                    value={level}
                    min={0}
                    max={9}
                    step={1}
                    onChange={(_, value) => handleLevelChange(value as number)}
                />
            </div>
        </div>
    );
};

export default ColorPicker;
