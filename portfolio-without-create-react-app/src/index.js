import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Header from './components/Header';
import MusicMaster from './projects/music-master';
import Jokes from './components/Jokes';
import './index.css';

ReactDOM.render(
<Router  history={createBrowserHistory()}>
    <Switch>
        <Route exact path='/' render={() => (<Header><App /></Header>)}></Route>        
        <Route path='/jokes' render={() => (<Header><Jokes /></Header>)}></Route>
        <Route path='/music-master' render={() => (<Header><MusicMaster /></Header>)}></Route>
    </Switch>
</Router>,
 document.getElementById('root')
);


