import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const HomePage: React.FC = () => {
    return (
        <div className={styles.home}>
            <h1>歡迎來到色彩代碼選擇器</h1>
            <Link to="/color-pick" className={styles.link}>
                前往顏色選擇頁面
            </Link>
        </div>
    );
};

export default HomePage;
