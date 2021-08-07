import React, { createContext } from "react";

type TabInfo = {
  tabId: string;
  tabName: string;
};

type TaskContextType = {
  createTab: (name: string) => TabInfo;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);
const { Provider } = TaskContext;

const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const createTab = (name: string) => {
    return {
      tabId: "0",
      tabName: name,
    };
  };
  return (
    <Provider value={{ createTab: (name: string) => createTab(name) }}>
      {children}
    </Provider>
  );
};

export { TaskProvider, TaskContext };
