import { createContext, useContext } from "react";

export const stateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const useStateContext = () => useContext(stateContext);
