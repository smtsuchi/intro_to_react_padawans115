import { createContext,  useContext,  useState, useEffect } from "react";

export const UserContext = createContext();



export const useUser = () => {
    return useContext(UserContext)
}


const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [cart, setCart] = useState([])


    const myValue = {
        user:user,
        setUser:setUser,
        cart:cart,
        setCart,
        
    }


    return (
        <UserContext.Provider value={myValue}>
            { children }            
        </UserContext.Provider>
    )
};
export default UserContextProvider