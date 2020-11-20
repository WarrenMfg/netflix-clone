import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export function App() {
  return (
    <Router>
        <Switch>
            <Route path="/signin">
                <p>I will be the sign in page</p>
            </Route>
            <Route path="/signup">
                <p>I will be the sign up page</p>
            </Route>
            <Route path="/browse">
                <p>I will be the browse page</p>
            </Route>
            <Route path="/">
                <p>I am going to be a cloned Netflix application</p>
                <Link to='/'>Home</Link>
                <Link to='/signin'>Sign In</Link>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/browse'>Browse</Link>
            </Route>
        </Switch>
    </Router>
  );
}
