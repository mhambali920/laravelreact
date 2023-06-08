import { useState } from "react";
import { stateContext } from "../contexts/StateContex";

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "ibal" });
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <stateContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
            }}
        >
            {children}
        </stateContext.Provider>
    );
};
