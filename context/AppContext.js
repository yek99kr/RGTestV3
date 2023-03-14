import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const AppUpdateContext = createContext();

export function useProject() {
  return useContext(AppContext);
}

export function useProjectUpdate() {
  return useContext(AppUpdateContext);
}

export function AppContextProvider({ children }) {
  const [hoveredProject, setHoveredProject] = useState(null);

  function updateProject(project) {
    setHoveredProject(project);
  }

  return (
    <AppContext.Provider value={hoveredProject}>
      <AppUpdateContext.Provider value={updateProject}>
        {children}
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  );
}
