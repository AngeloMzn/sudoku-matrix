import React from 'react';
import ReactDOM from 'react-dom';
import { SudokuSolver } from './components/SudokuSolver';
import './styles/index-app.css';

ReactDOM.render(
  <React.StrictMode>
    <SudokuSolver />
  </React.StrictMode>,
  document.getElementById('root')
);