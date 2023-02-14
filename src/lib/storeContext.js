// Core
import { createContext } from 'react';
import { RootStore } from './mobx/rootStore';

// Store
const rootStore = new RootStore();

export const Context = createContext(rootStore);

export const StoreProvider = (props) => {
    return (
        <Context.Provider value = { rootStore }>
            { props.children }
        </Context.Provider>
    );
};
