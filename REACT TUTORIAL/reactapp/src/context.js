import React, { createContext, useReducer } from 'react';

const UserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

const initialState = {
  users: [
    {
      id: "unique-1",
      name: "Yiğit Uçar",
      salary: "25000",
      department: "Bilişim",
    },
    {
      id: "unique-2",
      name: "Seda Eren",
      salary: "23000",
      department: "Pazarlama",
    },
    {
      id: "unique-3",
      name: "Mehmet Yıldırım",
      salary: "28000",
      department: "Üretim",
    },
  ],
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const UserConsumer = UserContext.Consumer;
export default UserConsumer;
