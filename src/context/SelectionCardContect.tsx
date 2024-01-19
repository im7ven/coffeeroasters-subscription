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
  [key: string]: string;
}

interface ShipmentPrice {
  base: number;
  increment: number;
  multiplier: number;
  incrementMultiplier: number;
  planTotal: number;
}

interface SelectionCardContextValue {
  selection: Selection;
  setSelection: Dispatch<SetStateAction<Selection>>;
  shipmentPrice: ShipmentPrice;
  setShipmentPrice: Dispatch<SetStateAction<ShipmentPrice>>;
  handleCalculatePlan: () => void;
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
    planTotal: 0,
  });

  const handleCalculatePlan = () => {
    setShipmentPrice({
      ...shipmentPrice,
      planTotal:
        (shipmentPrice.increment * shipmentPrice.incrementMultiplier +
          shipmentPrice.base) *
        shipmentPrice.multiplier,
    });
  };

  const selectionCardContextValue: SelectionCardContextValue = {
    selection,
    setSelection,
    shipmentPrice,
    setShipmentPrice,
    handleCalculatePlan,
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
