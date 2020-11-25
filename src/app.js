import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, SignIn, SignUp, Browse } from './pages';
import useAuthListener from './hooks/useAuthListener';
import { RenderChildrenOrRedirectIfAuthed, ProtectedRoute } from './auth/auth';

export function App() {
  const user = useAuthListener();

  return (
    <Router>
      <Switch>
        {/* sign in */}
        <RenderChildrenOrRedirectIfAuthed
          path={ROUTES.SIGN_IN}
          user={user}
          redirect={ROUTES.BROWSE}
        >
          <SignIn />
        </RenderChildrenOrRedirectIfAuthed>

        {/* sign up */}
        <RenderChildrenOrRedirectIfAuthed
          path={ROUTES.SIGN_UP}
          user={user}
          redirect={ROUTES.BROWSE}
        >
          <SignUp />
        </RenderChildrenOrRedirectIfAuthed>

        {/* browse */}
        <ProtectedRoute path={ROUTES.BROWSE} user={user}>
          <Browse />
        </ProtectedRoute>

        {/* home */}
        <RenderChildrenOrRedirectIfAuthed
          path={ROUTES.HOME}
          user={user}
          redirect={ROUTES.BROWSE}
        >
          <Home />
        </RenderChildrenOrRedirectIfAuthed>

        {/* 404 */}
        <Route path={ROUTES.NO_MATCH}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
