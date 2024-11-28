import React from 'react';
import { useSudokuSolver } from '../hooks/useSudokuSolver';
import { Board } from './Board';
import { randomBoards, cleanBoard, isGoodBoard } from "../sudoku-essentials";

export const SudokuSolver = () => {
    const {
        boardValue,
        boardColor,
        isAnimating,
        setIsAnimating,
        updateCell,
        fancyResetColor,
        resetBoard,
    } = useSudokuSolver();

    const handleInput = (value: any, column: number, row: number) => {
        if (isAnimating) return;
        const regExp = /[1-9]/;
        if (!regExp.test(value) && value !== '') return;
        updateCell(Number(value), column, row);
    };

    const solveInput = () => {
        setIsAnimating(true);
        const flashErr = () => {
            fancyResetColor(0, 0).then(() => {
                fancyResetColor(2, 20);
                setIsAnimating(false);
            });
        };

        const mock = cleanBoard.map((_, i) => [...boardValue[i]]);
        if (!isGoodBoard(mock)) return flashErr();

        console.log('Solving...');
    };

    return (
        <div className="app-container">
            <Board
                boardColor={boardColor}
                boardValue={boardValue}
                onInput={handleInput}
            />
            <div className="button-div">
                <button
                    className="solve-button"
                    onClick={() => !isAnimating && solveInput()}
                >
                    Sudoku Matrix It!
                </button>
                <button className="tool-button" onClick={resetBoard}>
                    <i className="fa-solid fa-eraser"></i>
                </button>
            </div>
        </div>
    );
};