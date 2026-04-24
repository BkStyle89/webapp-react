import { createContext,useState } from "react";

export const context = createContext();

export function Loading({children}){
    const [load, setLoad] = useState(false);

    return(
        <context.Provider value = {{ load, setLoad}}>
            {children}
        </context.Provider>
    )
}