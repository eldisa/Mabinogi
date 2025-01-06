import React, { useState } from "react";
import { Stack, Paper, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

interface SavedColor {
    id: string;
    color: string;
    timestamp: number;
}

interface MemoryBlockProps {
    savedColors: SavedColor[];
    onColorSelect: (color: string) => void;
    onDelete: (id: string) => void;
}

export const MemoryBlock: React.FC<MemoryBlockProps> = ({
    savedColors,
    onColorSelect,
    onDelete,
}) => {
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    return (
        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
                sx={{ gap: 2 }}
            >
                <Typography variant="h6" gutterBottom>
                    Saved Colors
                </Typography>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={showDeleteButton}
                            onChange={(e) =>
                                setShowDeleteButton(e.target.checked)
                            }
                        />
                    }
                    label="刪除模式"
                />
            </Box>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {savedColors.map(({ id, color }) => (
                    <Paper
                        key={id}
                        elevation={1}
                        sx={{
                            p: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 1,
                        }}
                    >
                        <div
                            onClick={() => onColorSelect(color)}
                            style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: color,
                                cursor: "pointer",
                                border: "1px solid #ccc",
                            }}
                        />
                        {showDeleteButton && (
                            <IconButton
                                size="small"
                                onClick={() => onDelete(id)}
                                aria-label="delete color"
                            >
                                <DeleteIcon />
                            </IconButton>
                        )}
                    </Paper>
                ))}
            </Stack>
        </Paper>
    );
};
