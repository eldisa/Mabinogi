import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography, Container } from "@mui/material";
import { ColorPickerTabs } from "../../components/ColorPickerTabs";
import styles from "./index.module.css";

const ColorPickPage: React.FC = () => {
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
                <ColorPickerTabs />
            </Stack>
        </Container>
    );
};

export default ColorPickPage;
