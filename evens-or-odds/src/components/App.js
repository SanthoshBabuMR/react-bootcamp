import React, {Component} from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                React App - Evens or Odds
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
const componentConnector = connect(mapStateToProps);

export default componentConnector(App);

