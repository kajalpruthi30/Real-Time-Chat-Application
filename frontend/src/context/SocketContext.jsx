import { createContext, useContext, useEffect, useState } from "react"
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext()

export const SocketContextProvider = ({children}) => {

    // socket connection, same as in server
    const[socket, setSocket] = useState(null);
    const[onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext()

    useEffect(() => {
      if(authUser){
            // create connection
            const socket = io("http://localhost:8000", {
                query:{
                    userId: authUser._id
                }
            })
            // set connection
            setSocket(socket)
            
            // from backend
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })

            // cleanup function - this will close the socket connection when component is unmounted
            return () => socket.close()
        } 
        else{

            // close the existing connection
            if(socket){
                socket.close()
                setSocket(null)
            }
      }
    }, [authUser])
    

    return(
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocketContext = () => {
    return useContext(SocketContext);
}
 