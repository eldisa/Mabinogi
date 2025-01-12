import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { TabPanel } from "./TabPanel";
import { ColorPickerContent } from "./ColorPickerContent";
import { CustomColorPicker } from "./CustomColorPicker";

interface ColorPickerTabsProps {
    showColorCards: boolean;
    onShowColorCardsChange: (show: boolean) => void;
    color1: number;
    color2: number;
    mode: number;
    level: number;
    startIndex: number;
    setColor1: (value: number) => void;
    setColor2: (value: number) => void;
    setMode: (value: number) => void;
    setLevel: (value: number) => void;
    setStartIndex: (value: number) => void;
    colorCode: string;
    setColorCode: (value: string) => void;
}

export const ColorPickerTabs: React.FC<ColorPickerTabsProps> = (props) => {
    const [tabValue, setTabValue] = React.useState(0);

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={tabValue}
                    onChange={(_, newValue) => setTabValue(newValue)}
                >
                    <Tab label="抓取顏色" />
                    <Tab label="自定義指定染劑" />
                </Tabs>
            </Box>

            <TabPanel value={tabValue} index={0}>
                <CustomColorPicker />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <ColorPickerContent {...props} />
            </TabPanel>
        </Box>
    );
};
