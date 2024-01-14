import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface Selection {
  preference: string;
  bean: string;
  quantity: string;
  grind: string;
  delivery: string;
}

interface SelectionCardContextValue {
  selection: Selection;
  setSelection: Dispatch<SetStateAction<Selection>>;
}

interface Props {
  children: ReactNode;
}

const SelectionCardContext = createContext<SelectionCardContextValue>(
  {} as SelectionCardContextValue
);

export const SelectionCardContextProvider = ({ children }: Props) => {
  // const [preference, setPreference] = useState("");
  // const [bean, setBean] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [grind, setGrind] = useState("");
  // const [delivery, setDelivery] = useState("");
  const [selection, setSelection] = useState<Selection>({
    preference: "",
    bean: "",
    quantity: "",
    grind: "",
    delivery: "",
  });

  const selectionCardContextValue: SelectionCardContextValue = {
    selection,
    setSelection,
  };

  return (
    <SelectionCardContext.Provider value={selectionCardContextValue}>
      {children}
    </SelectionCardContext.Provider>
  );
};

export const useSelection = () => {
  return useContext(SelectionCardContext);
};
