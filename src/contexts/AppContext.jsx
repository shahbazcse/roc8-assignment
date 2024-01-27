import { createContext, useReducer } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const reducerFn = (state, action) => {
        switch (action.type) {
            case "SELECT_DATE":
                return {
                    ...state,
                    selectedDate: action.payload
                }
            case "SELECT_SLOT":
                return {
                    ...state,
                    selectedSlot: action.payload
                }
            case "UPDATE_TIMESLOTS":
                return {
                    ...state,
                    timeslots: action.payload
                }
            default:
                return state
        }
    }

    const initialState = {
        timeslots: [],
        selectedDate: "",
        selectedSlot: {
            slotDate: "",
            duration: ""
        }
    };

    const [state, dispatch] = useReducer(reducerFn, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}