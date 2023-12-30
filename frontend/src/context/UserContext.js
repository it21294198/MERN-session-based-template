// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  const [loading, setLoading] = useState('');

  const loginUser = (name) => {
    setUserName(name)
  }

  const logoutUser = () =>{
    setUserName('')
  }

  const loadingStatus = (result) => {
    setLoading(result)
  }

  return (
    <UserContext.Provider value={{ userName,loading,loginUser,logoutUser,loadingStatus }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
