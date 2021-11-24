import React, { useState, useContext } from 'react';

const AlertContext = React.createContext();
// option 1
// const AlertToggleContext = React.createContext();
// export const useAlertToggle = () => useContext(AlertToggleContext);

export const useAlert = () => useContext(AlertContext);

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const toggle = () => setAlert(prev => !prev);

  // return (
  //   <AlertContext.Provider value={alert}>
  //     <AlertToggleContext.Provider value={toggle}>{children}</AlertToggleContext.Provider>
  //   </AlertContext.Provider>
  // );
  return (
    <AlertContext.Provider value={{ visible: alert, toggle }}>{children}</AlertContext.Provider>
  );
};

export default AlertProvider;
