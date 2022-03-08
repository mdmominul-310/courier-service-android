/* eslint-disable prettier/prettier */
import React from 'react';
import {createContext} from 'react';
import UseFirebase from '../Hooks/useFirebase';
export const AuthContext = createContext();
const Context = ({children}) => {
  const allContext = UseFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default Context;
