import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { TabPanel } from "./TabPanel";
import { ColorPickerContent } from "./ColorPickerContent";
import { CustomColorPicker } from "./CustomColorPicker";

export const ColorPickerTabs: React.FC = () => {
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
                <ColorPickerContent />
            </TabPanel>
        </Box>
    );
};
