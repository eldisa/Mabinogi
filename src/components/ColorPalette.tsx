import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import { colorPalette } from "../data/palette";

interface ColorPaletteProps {
    onColorSelect: (color: string) => void;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({
    onColorSelect,
}) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(selectedCategory === category ? null : category);
    };

    return (
        <Paper
            elevation={0}
            sx={{
                width: "100%",
                bgcolor: "transparent",
            }}
        >
            {/* Color Category Blocks */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(10, 1fr)",
                    gap: 1,
                    mb: 2,
                }}
            >
                {colorPalette.map(({ category, colorCodeArray }) => {
                    const isSelected = selectedCategory === category;
                    const mainColor = colorCodeArray[5]; // Using the middle shade as representative color

                    return (
                        <Box
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            sx={{
                                position: "relative",
                                height: "40px",
                                width: "40px",
                                bgcolor: mainColor,
                                borderRadius: "6px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.2s ease",
                                textTransform: "capitalize",
                                color: "white",
                                fontWeight: 500,
                                fontSize: "0.7rem",
                                textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                                boxShadow: isSelected
                                    ? "0 2px 4px rgba(0,0,0,0.2)"
                                    : "0 1px 2px rgba(0,0,0,0.1)",
                                "&:hover": {
                                    transform: "translateY(-1px)",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                                },
                                "&::after": isSelected
                                    ? {
                                          content: '""',
                                          position: "absolute",
                                          bottom: "-4px",
                                          left: "50%",
                                          transform: "translateX(-50%)",
                                          width: 0,
                                          height: 0,
                                          borderLeft: "4px solid transparent",
                                          borderRight: "4px solid transparent",
                                          borderBottom: "4px solid #fff",
                                      }
                                    : {},
                            }}
                        >
                            {/* {category} */}
                        </Box>
                    );
                })}
            </Box>

            {/* Color Array Display */}
            {selectedCategory && (
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(14, 1fr)", // Show all colors in one row
                        gap: 0.5,
                        p: 1.5,
                        bgcolor: "white",
                        borderRadius: "6px",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                    }}
                >
                    {colorPalette
                        .find((c) => c.category === selectedCategory)
                        ?.colorCodeArray.map((color, index) => (
                            <Box
                                key={`${selectedCategory}-${index}`}
                                onClick={() => onColorSelect(color)}
                                sx={{
                                    aspectRatio: "1",
                                    bgcolor: color,
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                    "&:hover": {
                                        transform: "scale(1.15)",
                                        boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                                    },
                                }}
                            />
                        ))}
                </Box>
            )}
        </Paper>
    );
};
