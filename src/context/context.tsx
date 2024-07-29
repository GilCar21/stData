"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface SearchInterface {
  setCount: Dispatch<SetStateAction<number>>;
  setList: Dispatch<SetStateAction<any>>;
  list: any[];
  count: number;
}

const Context = createContext({} as SearchInterface);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [list, setList] = useState<any[]>([]);
  const [count, setCount] = useState(0);

  return (
    <Context.Provider value={{ setList, list, setCount, count }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
