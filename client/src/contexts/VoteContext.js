import { createContext, useState, useContext } from 'react';

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [options, setOptions] = useState({ Minecraft: 0, GTA5: 0, CSGO: 0, LoL: 0 });

  const values = {
    options,
    setOptions,
  };

  return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};

export const useVote = () => useContext(VoteContext);