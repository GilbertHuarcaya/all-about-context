import PropTypes from 'prop-types';
import React, { createContext, useContext, useReducer } from 'react';
import {
  SUMAR_VOTO_C1,
  SUMAR_VOTO_C2,
  SUMAR_VOTO_C3,
  SUMAR_VOTO_C4,
  GET_VOTES_FROM_LOCALSTORAGE,
  PORCENTAJE,
  NUMERO,
  MOSTRAR_TODOS,
  MOSTRAR_1,
} from './constants';

const AppStateContext = createContext();
const AppDispatchContext = createContext();

const initialState = {
  isLoading: false,
  votos: [],
  porcentaje: false,
  numero: true,
};

function AppReducer(state, action) {
  switch (action.type) {
    case SUMAR_VOTO_C1: {
      return {
        ...state,
        votos: action.payload,
      };
    }
    case SUMAR_VOTO_C2: {
      return {
        ...state,
        votos: action.payload,
      };
    }
    case SUMAR_VOTO_C3: {
      return {
        ...state,
        votos: action.payload,
      };
    }
    case SUMAR_VOTO_C4: {
      return {
        ...state,
        votos: action.payload,
      };
    }
    case GET_VOTES_FROM_LOCALSTORAGE: {
      return {
        ...state,
        votos: action.payload,
      };
    }
    case PORCENTAJE: {
      return {
        ...state,
        porcentaje: action.payload,
        numero: !action.payload,
      };
    }
    case NUMERO: {
      return {
        ...state,
        numero: action.payload,
        porcentaje: !action.payload,
      };
    }
    case MOSTRAR_TODOS: {
      return {
        ...state,
        votos: action.payload,
      };
    }
    case MOSTRAR_1: {
      return {
        ...state,
        votos: action.payload,
      };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }
  return context;
};

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }
  return context;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
