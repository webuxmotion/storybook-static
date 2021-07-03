import { createContext, useContext, useReducer } from "react";

export const AlertContext = createContext();

export const useAlert = () => {
  return useContext(AlertContext);
}

const actionTypes = {
  SHOW_ALERT: 'SHOW_ALERT',
  HIDE_ALERT: 'HIDE_ALERT'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ALERT:
      return {...state, visible: true };
    case actionTypes.HIDE_ALERT:
      return {...state, visible: false };
    default:
      return state;
  }
}

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false
  });

  const show = () => dispatch({
    type: actionTypes.SHOW_ALERT
  });

  const hide = () => dispatch({
    type: actionTypes.HIDE_ALERT
  });

  return (
    <AlertContext.Provider value={{
      visible: state.visible,
      show,
      hide
    }}>
      {children}
    </AlertContext.Provider>
  )
}