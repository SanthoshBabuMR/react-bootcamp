import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        console.log('this.props:', this.props)
        return (
            <div>
                <h1>Reaction App</h1>
                {
                    this.props.messages.map((message, index) => <div key={index}>{message}<hr /></div>)
                }
            </div>
        );
    }
}

export default connect(state => {
    return {
        messages: state.messages
    }
})(App);
