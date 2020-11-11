---
to: src/contexts/<%= h.inflection.camelize(name) %>.js
unless_exists: true
---
import React, { createContext, useState } from 'react';

export const Context = createContext();

export const <%= h.inflection.camelize(name) %>Provider = ({ children }) => {
  const [state, setState] = useState();

  return(
    <Context.Provider value={{ state, setState }} >{children}</Context.Provider>
  )
};
