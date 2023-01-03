import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

type ContextType = {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
  isClicked: typeof initialState;
  setIsClicked: Dispatch<SetStateAction<typeof initialState>>;
  handleClick: (
    clicked: "chat" | "cart" | "userProfile" | "notification"
  ) => void;
  screenSize: undefined | number;
  setScreenSize: Dispatch<SetStateAction<number | undefined>>;
};

const StateContext = createContext<ContextType>({} as ContextType);

type Props = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: Props) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<typeof initialState>(initialState);

  const handleClick = (
    clicked: "chat" | "cart" | "userProfile" | "notification"
  ) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
