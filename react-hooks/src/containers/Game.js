import React, { useState } from 'react'
import Board from '../components/Board'
import calculateWinner from './helpers'

const styles = {
    width: '200px',
    margin: '20px auto',
};

const Game = ({ squares, onClick }) => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(board);


    const handleClick = i => {

        const boardCopy = [...board]; // copy the board state

        if (winner || boardCopy[i]) return; // if the board has been clicked or winner found true it exits being clicked

        boardCopy[i] = xIsNext ? 'X' : 'O';  // Put an X or an O in the clicked square (( and save board state as boardCopy state ))

        setBoard(boardCopy); // overwrite the board state to render to putting above of an X or an O in the clicked square

        setXisNext(!xIsNext); // alternate the boolean value of xisNext state


    }

    return (
        <>
            <Board  style={styles} squares={board} onClick={handleClick} />
        </>
    )
}

export default Game
