import React, { createContext, useState } from 'react';

export const Context = createContext();

const TOKEN_KEY = '@app:token';

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const login = (user) => {
    window.localStorage.setItem(TOKEN_KEY, user.token);

    setCurrentUser(user);
  };

  const logout = () => {
    window.localStorage.removeItem(TOKEN_KEY);
  };

  return (
    <Context.Provider value={{ currentUser, login, logout }}>
      {children}
    </Context.Provider>
  );
};
