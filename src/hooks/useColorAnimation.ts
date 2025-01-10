import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
    getColor,
    generateColorArray,
    generateColorCode,
} from "../utils/colorUtils";
import { setColorArray } from "../store/colorSlice";

interface AnimationConfig {
    mode: number;
    color1: number;
    color2: number;
    level: number;
    setBackground: React.Dispatch<React.SetStateAction<string>>;
    setColorCode: (value: string) => void;
}

export const useColorAnimation = ({
    mode,
    color1,
    color2,
    level,
    setBackground,
    setColorCode,
}: AnimationConfig) => {
    const dispatch = useDispatch();
    const animationRef = useRef<number | null>(null);
    const lastTimeRef = useRef<number | null>(null);
    const currentIndexRef = useRef(0);

    const color1Hex = getColor(color1);
    const color2Hex = getColor(color2);

    const handleColorChange = () => {
        switch (mode) {
            case 1:
                setBackground(color1Hex);
                break;
            case 2:
                setBackground(color2Hex);
                break;
            case 4:
            case 5:
            case 6: {
                const colorArray = generateColorArray(mode, 0, color1, color2);
                dispatch(setColorArray(colorArray));
                currentIndexRef.current =
                    (currentIndexRef.current + 1) % colorArray.length;
                setBackground(`#${colorArray[currentIndexRef.current]}`);
                break;
            }
            case 7:
                if (Math.random() < 0.5) {
                    setBackground(color2Hex);
                    setTimeout(() => setBackground(color1Hex), 80);
                }
                break;
        }
    };

    const animate = (time: number) => {
        if (!lastTimeRef.current) {
            lastTimeRef.current = time;
        }

        const elapsed = time - lastTimeRef.current;
        const duration = getDuration();

        if (elapsed >= duration) {
            handleColorChange();
            lastTimeRef.current = time;
        }
        // todo: need to add more cases here for additional modes
        if (mode >= 4) {
            animationRef.current = requestAnimationFrame(animate);
        }
    };

    const getDuration = () => {
        switch (mode) {
            case 6:
                return 350 / (level + 1);
            case 7:
                return 100 + (Math.random() * 600) / (level + 1);
            default:
                return 500 / (level + 1);
        }
    };

    // Generate and update color code whenever relevant props change
    useEffect(() => {
        const newColorCode = generateColorCode(mode, level, color1, color2);
        setColorCode(newColorCode);
    }, [mode, level, color1, color2, setColorCode]);

    useEffect(() => {
        if (mode === 1) setBackground(color1Hex);
        if (mode === 2) setBackground(color2Hex);

        if (mode >= 4) {
            animationRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            lastTimeRef.current = null;
            currentIndexRef.current = 0;
        };
    }, [mode, color1Hex, color2Hex, level]);

    return color1Hex;
};
