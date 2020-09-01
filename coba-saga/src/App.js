import React from 'react';
import Home from './components/Home';
import TodoBox from './components/TodoBox';
import TodoForm from './containers/TodoForm';
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import history from './history'

function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chats" component={TodoBox} />
          <Route path="/add" component={TodoForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
