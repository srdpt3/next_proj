"use client";
import { createContext } from "react";

export const GlobarContext = createContext(null);

export default function GlobalState({ children }) {
  return <GlobarContext.Provider value={{}}>{children}</GlobarContext.Provider>;
}
