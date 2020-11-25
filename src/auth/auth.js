import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function RenderChildrenOrRedirectIfAuthed({
  user,
  redirect,
  children,
  ...restProps
}) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: redirect
              }}
            />
          );
        }
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location }
              }}
            />
          );
        }
      }}
    />
  );
}
