import React from "react";
import { Box } from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export const TabPanel: React.FC<TabPanelProps> = ({
    children,
    value,
    index,
    ...other
}) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
            style={{ height: "100%", overflow: "auto" }} // Set fixed height and overflow
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
};
