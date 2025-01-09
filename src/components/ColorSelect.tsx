import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import colors from "../data/colors";

interface ColorOption {
    label: string;
    value: number;
    hex: string;
}

const colorOptions: ColorOption[] = colors.map((color, index) => ({
    label: `${color.id}-#${color.hex}`,
    value: index,
    hex: color.hex,
}));

interface ColorSelectProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
}

const ColorSelect: React.FC<ColorSelectProps> = ({
    label,
    value,
    onChange,
}) => {
    const selectedOption = colorOptions[value] || colorOptions[0];

    return (
        <Autocomplete
            value={selectedOption}
            onChange={(_, newValue) => {
                if (newValue) {
                    onChange(newValue.value);
                }
            }}
            options={colorOptions}
            getOptionLabel={(option) => option.hex}
            isOptionEqualToValue={(option, value) =>
                option.value === value.value
            }
            renderInput={(params) => (
                <TextField {...params} label={label} sx={{ width: "300px" }} />
            )}
            renderOption={(
                props: React.HTMLAttributes<HTMLLIElement>,
                option
            ) => (
                <li
                    {...props}
                    key={option.label}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <div
                        style={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: `#${option.hex}`,
                            border: "1px solid #ccc",
                        }}
                    />
                    {option.label}
                </li>
            )}
        />
    );
};

export default ColorSelect;
