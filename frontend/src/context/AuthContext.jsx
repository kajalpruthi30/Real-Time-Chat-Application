 import {useState, createContext, useContext} from 'react';

//  1. Create Context
 export const AuthContext = createContext();

// 2. Provide Context 
 export const AuthContextProvider = ({children}) => {
 
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user')) || null)

    return <AuthContext.Provider value={{authUser, setAuthUser}}>
        {children}
    </AuthContext.Provider>
 }

// 3. Use Context 
 export const useAuthContext = () => {
   return useContext(AuthContext);
}

