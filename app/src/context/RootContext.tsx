import React, {PropsWithChildren} from 'react';
import {createContext} from 'react';

type InitialContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialContext: InitialContextType = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

const RootContext = createContext(initialContext);

export const useRootContext = () => React.useContext(RootContext);

const RootProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const values = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return <RootContext.Provider value={values}>{children}</RootContext.Provider>;
};

export default RootProvider;
