import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useRef,
} from 'react';

import { Location } from '@prisma/client';

import { ACTIONS } from './actions';

interface LocationsContextProviderProps {
  children: ReactNode;
}

interface InitialStateProps {
  selected: Location | null;
  center: any;
}

interface LocationsContextProps {
  state: InitialStateProps;
  dispatch: any;
}

const LocationsContext = createContext({} as LocationsContextProps);

const initialState: InitialStateProps = {
  selected: null,
  center: { lat: 40.7589545, lng: -73.9893574 },
};

const reducer = (
  state: InitialStateProps,
  action: { type: string; payload: Location }
) => {
  switch (action.type) {
    case ACTIONS.SET_SELECTED:
      return {
        ...state,
        selected: action.payload,
      };
    case ACTIONS.SET_CENTER:
      return {
        ...state,
        center: action.payload,
      };
    default:
      return state;
  }
};

export const LocationsContextProvider = ({
  children,
}: LocationsContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LocationsContext.Provider value={{ state, dispatch }}>
      {children}
    </LocationsContext.Provider>
  );
};

export const useLocationsStore = () => {
  const context = useContext(LocationsContext);

  if (context === undefined) {
    throw new Error(
      'useLocationsStore must be used within LocationsContextProvider...'
    );
  }

  return context;
};
