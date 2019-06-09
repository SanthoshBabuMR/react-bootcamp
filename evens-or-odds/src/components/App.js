import React, {Component} from 'react';
import { connect } from 'react-redux';
import { startGame, endGame } from '../actions/settings';
import Instructions from './Instructions';

class App extends Component {
    
    render() {
        console.log("this.props: ", this.props)
        return (
            <div>
              <h1>♡ ♤ Evens or Odds ♢ ♧</h1>
              {
                  this.props.gameStarted ? 
                  (
                    <div>
                        <h2>The Game just started!</h2>
                        <p>
                            <button onClick={this.props.stop}>Stop Game</button>
                        </p>
                        <hr /> 
                        <Instructions />
                    </div>
                  )
                : 
                    (
                    <div>
                        <h2>Wanna play a game?!</h2>
                        <p>
                            <button onClick={this.props.start}>Start now</button>
                        </p>
                    </div>
                    )
              }
              
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        gameStarted: state.gameStarted
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        start: () => dispatch(startGame()),
        stop: () => dispatch(endGame())
    }
}
const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(App);

