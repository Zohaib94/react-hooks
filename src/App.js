import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TasksComponent from './TasksComponent';
import ReactionComponent from './ReactionComponent';

function App(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/reactions' component={ReactionComponent}/>
        <Route path='/' component={TasksComponent} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
