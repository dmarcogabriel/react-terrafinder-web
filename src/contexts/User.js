import React, { createContext, useState, useEffect } from 'react';
import { USER_KEY } from 'constants/userKey';
import api from 'services/api';

export const Context = createContext();

export const UserProvider = ({ children, storedUser }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState();

  const login = ({ token, email, firstName, _id, ...user }) => {
    const data = { _id, firstName, email, token };

    window.localStorage.setItem(USER_KEY, JSON.stringify(data));
    setCurrentUser({ ...user, ...data });
  };

  const userIsLogged = () => !!currentUser;

  const logout = () => {
    window.localStorage.removeItem(USER_KEY);
    setCurrentUser(null);
    window.location.href = '/home';
  };

  const loadUserData = async () => {
    setLoadingUser(true);

    try {
      const { data: res } = await api.get(`users/${storedUser._id}`);
      console.log(res.data);
      setCurrentUser({ ...res.data.user, token: storedUser.token });
      setLoadingUser(false);
    } catch (err) {
      logout();
      setLoadingUser(false);
    }
  };

  const updateUser = (data) => {
    setCurrentUser((old) => ({ ...old, ...data }));
  };

  useEffect(() => {
    if (storedUser) loadUserData();
  }, []);

  return (
    <Context.Provider
      value={{ currentUser, login, logout, updateUser, userIsLogged }}
    >
      {!loadingUser && children}
    </Context.Provider>
  );
};
