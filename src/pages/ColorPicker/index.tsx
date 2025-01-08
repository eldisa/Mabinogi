import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Typography, Container } from "@mui/material";
import { ColorPickerTabs } from "../../components/ColorPickerTabs";

import { DEFAULTS } from "../../utils/constants";
import styles from "./index.module.css";

const ColorPickPage: React.FC = () => {
    const [mode, setMode] = useState(DEFAULTS.MODE as number);
    const [color1, setColor1] = useState(DEFAULTS.COLOR_1 as number);
    const [color2, setColor2] = useState(DEFAULTS.COLOR_2 as number);
    const [level, setLevel] = useState(DEFAULTS.LEVEL as number);
    const [startIndex, setStartIndex] = useState(
        DEFAULTS.START_INDEX as number
    );
    const [colorCode, setColorCode] = useState("");
    const [showColorCards, setShowColorCards] = useState(true);

    return (
        <Container maxWidth="lg" className={styles.page}>
            <Stack spacing={3}>
                <header>
                    <Link to="/" className={styles.backLink}>
                        返回首頁
                    </Link>
                    <Typography variant="h4" component="h1" gutterBottom>
                        顏色選擇頁面
                    </Typography>
                </header>
                <ColorPickerTabs
                    showColorCards={showColorCards}
                    onShowColorCardsChange={setShowColorCards}
                    color1={color1}
                    color2={color2}
                    mode={mode}
                    level={level}
                    startIndex={startIndex}
                    setColor1={setColor1}
                    setColor2={setColor2}
                    setMode={setMode}
                    setLevel={setLevel}
                    setStartIndex={setStartIndex}
                    colorCode={colorCode}
                    setColorCode={setColorCode}
                />
            </Stack>
        </Container>
    );
};

export default ColorPickPage;
