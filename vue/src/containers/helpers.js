function initialState() {
    return {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  function move(i, state) {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return null;
    }
  
    squares[i] = state.xIsNext ? 'X' : 'O';
  
    return {
      history: history.concat([{
        squares,
      }]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
    };
  }
  
  function currentMove(state) {
    return state.history[state.stepNumber];
  }
  
  // function jumpTo(step, state) {
  //   const xIsNext = step % 2 === 0;
  //   return { ...state, stepNumber: step, xIsNext };
  // }
  
  export {
    initialState, calculateWinner, currentMove, move,
  };
  