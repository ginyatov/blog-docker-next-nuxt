import { observer } from "mobx-react-lite";
import { createContext } from "react";
import RootStore from "./rootStore";
import { Progress } from "@chakra-ui/react";

export const Store = createContext<RootStore>({} as RootStore);

const rootStore = new RootStore();

const GlobalStore: React.FC = ({ children }) => {
  if (!rootStore.auth.isInitialized)
    return <Progress size="sm" isIndeterminate />;
  return <Store.Provider value={rootStore}>{children}</Store.Provider>;
};

export default observer(GlobalStore);
