import React, { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [data, setData] = useState([]);

  const addData = (message, severity) => {
    const newObject = {
      id: uuid(),
      message,
      severity,
    };
    setData((prevData) => [newObject, ...prevData]);
  };

  const removeData = (id) => {
    setData((prevData) => prevData.filter((obj) => obj.id !== id));
  };

  return (
    <AlertContext.Provider value={{ data, addData, removeData }}>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlertContext() {
  return useContext(AlertContext);
}
