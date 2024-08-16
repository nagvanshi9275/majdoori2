

// AppwriteContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { Client, Account } from 'appwrite';

export const AppwriteContext = createContext();

export const AppwriteProvider = ({ children }) => {
  const client = new Client();
  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66abb86600148c85e45b');

  const account = new Account(client);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await account.get();
        setLoggedInUser(user);
        setUserEmail(user.email);
      } catch (error) {
        console.log('No user logged in');
      }
    };

    fetchUser();
  }, []);

  return (
    <AppwriteContext.Provider value={{ client, account, loggedInUser, setLoggedInUser, userEmail, setUserEmail }}>
      {children}
    </AppwriteContext.Provider>
  );
};

export const useAppwrite = () => React.useContext(AppwriteContext);







