import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ColorPickPage from "./pages/ColorPicker/";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                123
                <Route path="/color-pick" element={<ColorPickPage />} />
            </Routes>
        </Router>
    );
};

export default App;
