import React, { useState } from "react";

export const ContextProvider = React.createContext();

function ContextStore({ children }) {
  const [value, setValue] = useState([

  ]);

  const removeItem = (id) => {
    setValue(value.filter((item) => item.id !== id));
  };

  const addItem = (newItem) => {
    setValue([...value, newItem]);
  };

  const updateItem = (itemReplace   ) => {
    const index = value.findIndex(item => item.id === itemReplace.id)
    const newList = value;
    newList.splice(index, 1, itemReplace)
    setValue(newList)
  };

  const valueContext = {
    value,
    removeItem,
    addItem,
    updateItem
  };
  return (
    <ContextProvider.Provider value={valueContext}>
      {children}
    </ContextProvider.Provider>
  );
}

export default ContextStore;
