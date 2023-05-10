import React, { createContext, useState } from "react";

export const UserContext = createContext({
    isDay : true,
    setIsDay : () => {}
})

const UserProvider = ({ children }) => {
    const [isDay, setIsDay] = useState(true);

    return (
        <UserContext.Provider value = {{ isDay, setIsDay }} >
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider;
