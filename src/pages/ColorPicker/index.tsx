import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorPicker from "../../components/ColorPicker";
import Preview from "../../components/Preview";
import styles from "./index.module.css";

const ColorPickPage: React.FC = () => {
    const [mode, setMode] = useState(4);
    const [color1, setColor1] = useState(0);
    const [color2, setColor2] = useState(10);
    const [level, setLevel] = useState(0);
    const [colorCode, setColorCode] = useState("");

    return (
        <div className={styles.page}>
            <header>
                <Link to="/" className={styles.backLink}>
                    返回主頁
                </Link>
                <h1>顏色選擇頁面</h1>
            </header>
            <main className={styles.main}>
                <ColorPicker
                    color1={color1}
                    color2={color2}
                    mode={mode}
                    level={level}
                    setColor1={setColor1}
                    setColor2={setColor2}
                    setMode={setMode}
                    setLevel={setLevel}
                />
                <Preview
                    mode={mode}
                    color1={color1}
                    color2={color2}
                    level={level}
                    colorCode={colorCode}
                    setColorCode={setColorCode}
                />
            </main>
        </div>
    );
};

export default ColorPickPage;
