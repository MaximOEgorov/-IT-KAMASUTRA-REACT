import React, { createContext, useState } from 'react';

export const StoreContext = createContext()

export const StoreProvider=({children}) => {

    const [store, setStore] = useState([]);

    return (
        <StoreContext.Provider value={{ store, setStore }}>
            {children}
        </StoreContext.Provider>
    );

}


