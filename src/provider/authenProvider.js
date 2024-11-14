import React from 'react';
import auThenContext from '../context/authenContext';
import { useState } from 'react';
const AuthDataProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(null);
    return (
        <auThenContext.Provider value={{currUser , setCurrUser}}>
            {children}
        </auThenContext.Provider>
    );
};

export default AuthDataProvider;
