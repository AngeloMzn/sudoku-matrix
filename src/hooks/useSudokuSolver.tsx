import { useState } from 'react';
import { cleanBoard, initialBoard, defaultColorBoard, delay, isGoodBoard } from "../sudoku-essentials";

export const useSudokuSolver = () => {
    const [boardValue, setBoardValue] = useState(initialBoard);
    const [boardColor, setBoardColor] = useState(defaultColorBoard);
    const [isAnimating, setIsAnimating] = useState(false);
    const [randomBoardCount, setRandomBoardCount] = useState(0);

    const updateCell = (value: number, col: number, row: number) => {
        const copy = cleanBoard.map((_, i) => [...boardValue[i]]);
        copy[col][row] = value;
        setBoardValue(copy);
    };

    const updateColor = (code: number, col: number, row: number) => {
        const copyC = [...boardColor];
        copyC[col][row] = code;
        setBoardColor(copyC);
    };

    const fancyResetColor = async (code: number, ms: number) => {
        for (let i = 0; i < 9; i++) {
            await delay(ms);
            for (let j = 0; j < 9; j++) {
                updateColor(code, i, j);
            }
        }
    };

    const resetBoard = () => {
        setIsAnimating(false);
        setBoardValue(initialBoard);
    };

    return {
        boardValue,
        boardColor,
        isAnimating,
        randomBoardCount,
        setIsAnimating,
        setRandomBoardCount,
        updateCell,
        updateColor,
        fancyResetColor,
        resetBoard,
    };
};