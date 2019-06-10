import React, {Component} from 'react';
import { connect } from 'react-redux';
import { startGame, endGame, setGameId, setCard, evenGuess, oddGuess } from '../actions/settings';
import DrawCard from './DrawCard';
import Instructions from './Instructions';
import { setPlayerChoice } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import {fetchNewCard} from '../actions/card';
import {FETCH_STATES} from '../constant/index';

const DECK_OF_CARDS = 'http://deck-of-cards-api-wrapper.appspot.com';
class App extends Component {

    start = () => {
        this.props.startGame();
        this.props.fetchNewDeck();
    }

    render() {
        if (this.props.fetchStatus === FETCH_STATES.FAILURE ) {
            return (
                <div>
                    An error occurred. Please try reloading the app.
                    <p>
                        {this.props.message}
                    </p>
                </div>
            );
        }
        return (
            <div>
              <h1>♡ ♤ Evens or Odds ♢ ♧</h1>
              {
                  this.props.gameStarted ? 
                  (
                    <div>
                        <h2>The Game just started!</h2>
                        <p>
                            <button onClick={this.props.endGame}>Stop Game</button>
                        </p>
                        <hr />
                        <DrawCard 
                            deck_id={this.props.deck_id}
                            remaining={this.props.remaining} 
                            image={this.props.image}
                            type={this.props.type}
                            fetchNewCard={this.props.fetchNewCard}
                            player_choice={this.props.player_choice}
                            setPlayerChoice={this.props.setPlayerChoice}
                            correct_guess={this.props.correct_guess}
                            all_time_best={this.props.all_time_best}/>
                        <hr /> 
                        <Instructions />
                    </div>
                  )
                : 
                    (
                    <div>
                        <h2>Wanna play a game?!</h2>
                        <p>
                            <button onClick={this.start}>Start now</button>
                        </p>
                    </div>
                    )
              }
              
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {gameStarted} = state.settings;
    const {deck_id, remaining, message, fetchStatus }  = state.deck;
    const {type, image}  = state.card;
    const {correct_guess, player_choice, all_time_best} = state.game;
    return {
        gameStarted,
        deck_id,
        remaining,
        message,
        fetchStatus,
        type,
        image,
        correct_guess,
        player_choice,
        all_time_best
    }
}

const componentConnector = connect(mapStateToProps, {
    startGame,
    endGame,
    fetchNewDeck,
    fetchNewCard,
    setPlayerChoice
});

export default componentConnector(App);

