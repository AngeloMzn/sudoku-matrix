import React from 'react';
import { boardIndexesToGray } from "../sudoku-essentials";

export const Board = ({ boardColor, boardValue, onInput }: any) => {
    const fancyBorder = (colIndex: number, rowIndex: number) => {
        return boardColor[colIndex][rowIndex] === 0
            ? 'solid 5px #f76363'
            : boardColor[colIndex][rowIndex] === 1
            ? 'solid 5px #5ced89'
            : 'solid 1px black';
    };

    return (
        <div className="board-wrap">
            {boardValue.map((column: any[], colIndex: number) =>
                column.map((rowItem: any, rowIndex: number) => (
                    <input
                        key={`${colIndex}${rowIndex}`}
                        className="cell"
                        value={rowItem === 0 ? '' : rowItem}
                        maxLength={1}
                        type="text"
                        onInput={(e: any) =>
                            onInput(e.target.value, colIndex, rowIndex)
                        }
                        style={{
                            backgroundColor: boardIndexesToGray.some(
                                (val: number) =>
                                    val === Number(`${colIndex}${rowIndex}`) ||
                                    val === Number(`${colIndex}${rowIndex}`) - 1 ||
                                    val === Number(`${colIndex}${rowIndex}`) - 2
                            )
                                ? '#dbdbdb'
                                : '#f7f7f7',
                            border: fancyBorder(colIndex, rowIndex),
                        }}
                    />
                ))
            )}
        </div>
    );
};
