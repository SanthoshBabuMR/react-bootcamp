import React, {Component} from 'react';
import classNames from 'classnames';


const checkRecord = (guess) => {
    const RECORD_KEY = 'EVENS_OR_ODDS_HIGHEST_GUESSES'
    var highestGuesses = localStorage.getItem(RECORD_KEY);
    highestGuesses ? window.parseInt(highestGuesses, 10) : 0
    var isNewRecord = highestGuesses > 0 && highestGuesses <= guess;
    if (highestGuesses < guess) {
        highestGuesses = guess;
        localStorage.setItem(RECORD_KEY, highestGuesses)
    }
    return {
        isNewRecord,
        highestGuesses
    }
}

const card = (deck_id, image, fetchNewCard) => (
    <div>
        <hr />
        <p>
            <button onClick={() => fetchNewCard(deck_id)}>Draw Next Card</button>
        </p>
        {
            image ? <img src={image} alt="card"/> : null
        }
    </div>
);

const DrawCard = props => {
    const {deck_id, player_choice, correct_guess, remaining, image, setPlayerChoice, fetchNewCard} = props;
    const evenBtnCls = classNames('btn', {'btn-primary': (player_choice === 'even')})
    const oddBtnCls = classNames('btn', {'btn-primary': (player_choice === 'odd')})
    const record = checkRecord(correct_guess);
    if (remaining === 0) {
        return (
            <div>
                <h3>Game over!</h3>
                <p>Your win record: {correct_guess}</p>
            </div>
        )
    }

    return (
        <div>
            {
                player_choice ?
                <div>
                    <h1>{correct_guess} correct { correct_guess === 1 ? 'guess' : 'guesses' }</h1>
                    <em>{ record.isNewRecord ? 'Wow!! This is a all time new high score' : '' }</em>
                    <h2>All time high: {record.highestGuesses}</h2>
                </div>
                :
                <h1><em>please make a choice between even or odd</em></h1>
            }
            <p>
                Remaining tries: {remaining}
            </p>
            <h3>What's the next card gonna be?</h3>
            <p>
                <button className={evenBtnCls} onClick={() => setPlayerChoice('even')}>Even</button> 
                <button className={oddBtnCls} onClick={() => setPlayerChoice('odd')}>Odd</button>
            </p>

            {
                player_choice ? card(deck_id, image, fetchNewCard) : null
            }
            
        </div>
    );
}


export default DrawCard;

