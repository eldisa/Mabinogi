import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ColorPickPage from "./pages/ColorPicker/";

const App: React.FC = () => {
    return (
        <Router basename="/Mabinogi">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/color-pick" element={<ColorPickPage />} />
            </Routes>
        </Router>
    );
};

export default App;
