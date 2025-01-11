import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const modeOptions = [
    // todo: remove 1 &2 , merge to single select
    { label: "固定顏色 1", value: 1 },
    { label: "固定顏色 2", value: 2 },
    { label: "正向漸進", value: 4 },
    { label: "逆向漸進", value: 5 },
    { label: "隨機漸進", value: 8 },
    { label: "往返", value: 6 },
    { label: "雙色隨機切換(不同步)", value: 7 },
    { label: "雙色隨機切換(同步)", value: 9 },
] as const;

interface ModeSelectProps {
    value: number;
    onChange: (value: number) => void;
}

const ModeSelect: React.FC<ModeSelectProps> = ({ value, onChange }) => {
    const selectedOption =
        modeOptions.find((option) => option.value === value) || modeOptions[0];

    return (
        <Autocomplete
            value={selectedOption}
            onChange={(_, newValue) => {
                if (newValue) {
                    onChange(newValue.value);
                }
            }}
            options={modeOptions}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) =>
                option.value === value.value
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="閃爍模式"
                    sx={{ width: "300px" }}
                />
            )}
        />
    );
};

export default ModeSelect;
