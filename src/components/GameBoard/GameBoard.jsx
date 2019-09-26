import React from 'react';
import GuessRow from '../GuessRow/GuessRow';

const GameBoard = props => {
  const { colors, guesses } = props

  return (
    <div>
      {guesses.map((guess, idx) =>
        <GuessRow
          guess={guess}
          colors={colors}
          rowIdx={idx}
          currentGuess={idx === (guesses.length - 1)}
          key={idx}
        />
      )}
    </div>
  )
}

export default GameBoard;
