import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from 'hooks/useUser';

export default function PrivateRoute({ children, ...props }) {
  const { currentUser } = useUser();

  return (
    <Route
      {...props}
      render={({ location: { pathname } }) =>
        currentUser && currentUser.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: pathname },
            }}
          />
        )
      }
    />
  );
}
