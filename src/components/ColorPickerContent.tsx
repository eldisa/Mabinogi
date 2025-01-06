import React from 'react';
import { Stack } from '@mui/material';
import ColorPicker from './ColorPicker';
import Preview from './Preview';

interface ColorPickerContentProps {
  color1: number;
  color2: number;
  mode: number;
  level: number;
  setColor1: (value: number) => void;
  setColor2: (value: number) => void;
  setMode: (value: number) => void;
  setLevel: (value: number) => void;
  colorCode: string;
  setColorCode: (value: string) => void;
}

export const ColorPickerContent: React.FC<ColorPickerContentProps> = (props) => {
  return (
    <Stack
      direction="row"
      spacing={6}
      justifyContent="center"
      alignItems="flex-start"
    >
      <Preview
        mode={props.mode}
        color1={props.color1}
        color2={props.color2}
        level={props.level}
        colorCode={props.colorCode}
        setColorCode={props.setColorCode}
      />
      <ColorPicker
        color1={props.color1}
        color2={props.color2}
        mode={props.mode}
        level={props.level}
        setColor1={props.setColor1}
        setColor2={props.setColor2}
        setMode={props.setMode}
        setLevel={props.setLevel}
      />
    </Stack>
  );
};