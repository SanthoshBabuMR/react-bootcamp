import React, {Component} from 'react';

const Joke = ({ joke: {setup, punchline} }) => ( <p style={{margin: 20}}>{setup} <em>{punchline}</em></p> )

class Jokes extends Component {
    state = {
        joke: {},
        jokes: []
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({ jokes: json }))
    }

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(joke => this.setState({ joke }))
    }

    render () {
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke} />
                <hr />
                <h3>Want ten new jokes?</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {
                    this.state.jokes.map(joke => <Joke joke={joke} key={joke.id}/>)
                }
            </div>
            
        );
    }
}

export default Jokes;