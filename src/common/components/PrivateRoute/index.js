import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from 'hooks/useUser';

export default function PrivateRoute({ path, children }) {
  const { currentUser } = useUser();

  // todo: prev route when unlogged

  if (currentUser && currentUser.token)
    return <Route path={path}>{children}</Route>;
  return <Redirect to="/login" />;
}
