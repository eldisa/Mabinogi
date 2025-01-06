import React from "react";
import { Box, Typography, Paper, Stack, Grid } from "@mui/material";
import { colorPalette } from "../data/palette";

interface ColorPaletteProps {
    onColorSelect: (color: string) => void;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({
    onColorSelect,
}) => {
    return (
        <Paper
            elevation={0}
            sx={{ p: 2, maxHeight: "80vh", overflow: "auto", width: "100%" }}
        >
            <Grid container spacing={2}>
                {colorPalette.map(({ category, colorCodeArray }) => (
                    <Grid item xs={12} key={category}>
                        <Box
                            sx={{
                                mb: 2,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    width: "120px",
                                    textTransform: "capitalize",
                                    flexShrink: 0,
                                }}
                            >
                                {category}
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={0.5}
                                sx={{
                                    flexGrow: 1,
                                    overflow: "auto",
                                    "&::-webkit-scrollbar": {
                                        height: "8px",
                                    },
                                    "&::-webkit-scrollbar-track": {
                                        background: "#f1f1f1",
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        background: "#888",
                                        borderRadius: "4px",
                                    },
                                }}
                            >
                                {colorCodeArray.map((colorCode, index) => (
                                    <Box
                                        key={`${category}-${index}`}
                                        onClick={() => onColorSelect(colorCode)}
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            bgcolor: colorCode,
                                            cursor: "pointer",
                                            transition: "transform 0.2s",
                                            flexShrink: 0,
                                            "&:hover": {
                                                transform: "scale(1.1)",
                                            },
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};
