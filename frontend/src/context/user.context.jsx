import React, { createContext, useState, useContext } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // User state to store logged-in user info

    const login = (userData) => {
        setUser(userData); // Set user data when logged in
        localStorage.setItem('user', JSON.stringify(userData)); // Save user data to localStorage
    };

    const logout = () => {
        setUser(null); // Clear user data on logout
        localStorage.removeItem('user'); // Remove user data from localStorage
    };

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

