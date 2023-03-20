import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [moviId, setMoviId] = useState(22);
  const getId = id => setMoviId(id);
  const value = { moviId, getId };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
