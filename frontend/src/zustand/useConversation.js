import { create } from 'zustand';

const useConversation = create((set) => {

    // const initialSelectedConversation = JSON.parse(localStorage.getItem('selected-conversation')) || null;

    return {
        // State variables
        selectedConversation: null,
        messages: [],
        lastMessages: [],

        // Setter functions
        setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
        setMessages: (messages) => set({ messages }),
        setLastMessages: (lastMessages) => set({ lastMessages })
    };
});

export default useConversation;
