import { useState, useEffect } from "react";
import useConversation from "../zustand/useConversation";
import {toast} from "react-hot-toast"

const useGetMessages = () => {

    const [loading, setLoading] = useState(false)
    const {messages, setMessages, selectedConversation} = useConversation()

    useEffect(() => {
        const getMessages =  async(message) => {
            setLoading(true)
            try{
                const res = await fetch(`/api/messages/get/${selectedConversation._id}`)
                const data = await res.json();
                setMessages(data);
        
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

        if(selectedConversation?._id) getMessages()

    }, [selectedConversation?._id, setMessages])

    return {loading, messages}
}

export default useGetMessages;