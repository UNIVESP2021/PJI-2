import { createContext, useState } from 'react';

export const PiContext = createContext();

export default function PiContextProvider({ children }) {
  const [titles, setTitles] = useState([]);
  const [fileId, setFileId] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [members, setMembers] = useState([]);
  const [infoProject, setInfoProject] = useState([]);

  const state = {
    titles,
    setTitles,
    fileId,
    setFileId,
    selectedTitle,
    setSelectedTitle,
    members,
    setMembers,
    infoProject,
    setInfoProject,
  };

  return <PiContext.Provider value={state}>{children}</PiContext.Provider>;
}
