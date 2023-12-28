// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  const loginUser = (name) => {
    setUserName(name)
  }

  const logoutUser = () =>{
    setUserName('')
  }

  return (
    <UserContext.Provider value={{ userName,loginUser,logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
