import { createContext,  useContext,  useState, useEffect } from "react";

export const MessageContext = createContext();



export const useMessage = () => {
    return useContext(MessageContext)
}

export const useQueryParams = () => {
    const query = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(query.entries());
    return params
}



const MessageContextProvider = ({ children }) => {
    const [messages, setMessages] = useState([])


    const addMessage = (text, color='success') => {
        const newMessage = {
            text,
            color
        }
        setMessages([...messages, newMessage])
    };

    const removeMessage = (index) => {
        const copy = [...messages]
        copy.splice(index, 1)
        setMessages(copy)
    }

    const myValue = {
        messages,
        addMessage,
        removeMessage
    }


    return (
        <MessageContext.Provider value={myValue}>
            { children }            
        </MessageContext.Provider>
    )
};
export default MessageContextProvider