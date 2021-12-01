import React, { createContext, useState, useEffect, useCallback } from 'react';
import { USER_KEY } from 'constants/userKey';
import api from 'services/api';

export const Context = createContext();

export const UserProvider = ({ children }) => {
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
    window.location.href = '/';
  };

  const loadUserData = useCallback(async () => {
    setLoadingUser(true);

    try {
      const storedUser = JSON.parse(window.localStorage.getItem(USER_KEY));
      if (storedUser) {
        const { data: res } = await api.get(`users/${storedUser._id}`);
        setCurrentUser({ ...res.data.user, token: storedUser.token });
      }
      setLoadingUser(false);
    } catch (err) {
      logout();
      setLoadingUser(false);
    }
  }, []);

  const updateUser = (data) => {
    setCurrentUser((old) => ({ ...old, ...data }));
  };

  const setUserPlan = (plan) => setCurrentUser((old) => ({ ...old, plan }));

  useEffect(() => {
    loadUserData();
  }, [loadUserData]);

  if (loadingUser && !currentUser) return null;

  return (
    <Context.Provider
      value={{
        currentUser,
        login,
        logout,
        updateUser,
        userIsLogged,
        setUserPlan,
      }}
    >
      {children}
    </Context.Provider>
  );
};
