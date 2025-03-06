import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { TabPanel } from "./TabPanel";
import { ColorPickerContent } from "./ColorPickerContent";
import CustomColorPicker from "./CustomColorPicker";

export const ColorPickerTabs: React.FC = () => {
    const [tabValue, setTabValue] = React.useState(0);

    return (
        <Box sx={{ width: "100%", height: "800px" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={tabValue}
                    onChange={(_, newValue) => setTabValue(newValue)}
                >
                    <Tab label="抓取顏色" />
                    <Tab label="自定義指定染劑" />
                </Tabs>
            </Box>

            <Box sx={{ height: "calc(100% - 48px)", overflow: "auto" }}>
                <TabPanel value={tabValue} index={0}>
                    <CustomColorPicker />
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <ColorPickerContent />
                </TabPanel>
            </Box>
        </Box>
    );
};
