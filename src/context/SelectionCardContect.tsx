import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface Selection {
  preference: string;
  bean: string;
  quantity: string;
  grind: string;
  delivery: string;
}

interface ShipmentPrice {
  base: number;
  increment: number;
  multiplier: number;
  incrementMultiplier: number;
}

interface SelectionCardContextValue {
  selection: Selection;
  setSelection: Dispatch<SetStateAction<Selection>>;
  shipmentPrice: ShipmentPrice;
  setShipmentPrice: Dispatch<SetStateAction<ShipmentPrice>>;
}

interface Props {
  children: ReactNode;
}

const SelectionCardContext = createContext<SelectionCardContextValue>(
  {} as SelectionCardContextValue
);

export const SelectionCardContextProvider = ({ children }: Props) => {
  const [selection, setSelection] = useState<Selection>({
    preference: "_____",
    bean: "_____",
    quantity: "_____",
    grind: "_____",
    delivery: "_____",
  });

  const [shipmentPrice, setShipmentPrice] = useState<ShipmentPrice>({
    base: 0,
    increment: 0,
    multiplier: 0,
    incrementMultiplier: 0,
  });

  const selectionCardContextValue: SelectionCardContextValue = {
    selection,
    setSelection,
    shipmentPrice,
    setShipmentPrice,
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
