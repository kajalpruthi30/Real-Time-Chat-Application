import { useState, useEffect } from "react";
import useConversation from "../zustand/useConversation";
import {toast} from "react-hot-toast"

const useGetMessages = () => {

    const [loading, setLoading] = useState(false)
    const {messages, setMessages, lastMessages, setLastMessages} = useConversation()

    useEffect(() => {
        const getLastMessages =  async(message) => {
            setLoading(true)
            try{
                const res = await fetch('/api/messages/getLastMessages')
                const data = await res.json();
                setLastMessages(data);

                if(data.error){
                    throw new Error(data.error)
                }
            }
            catch(error){
                toast.error(error.message)
            }
            finally{
                setLoading(false)
            }
        }

        getLastMessages()

    }, [messages, setMessages])

    return {loading, lastMessages}
}

export default useGetMessages;