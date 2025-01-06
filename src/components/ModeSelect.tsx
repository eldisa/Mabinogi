import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const modeOptions = [
    { label: "固定顏色 1", value: 1 },
    { label: "固定顏色 2", value: 2 },
    { label: "規則", value: 4 },
    { label: "不規則", value: 8 },
    { label: "往返", value: 6 },
    { label: "切換", value: 7 },
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
