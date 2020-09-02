import React, { useState } from 'react'
import Board from '../components/Board'

const styles = {
    width: '200px',
    margin: '20px auto',
};

const Game = ({ squares, onClick }) => {

    const [board, setBoard] = useState(Array(9).fill(null));

    const handleClick = i => {

        const boardCopy = [...board];
        setBoard(boardCopy);

    }

    return (
        <>
            <Board  style={styles} squares={board} onClick={handleClick} />
        </>
    )
}

export default Game
