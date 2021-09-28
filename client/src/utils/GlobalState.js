
//createContext- instantiate a new Context object(container to hold gloabl state data and functionality)
//useContext allows us to use the state
import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

//instantiate the global state object
const StoreContext = createContext();
const { Provider } = StoreContext;

//instantiate initial global state with useProductReducer
//returns state(updated version of global state object)
//returns dispatch-method used to update state
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      products: [],
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };