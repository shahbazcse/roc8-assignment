import { createContext, useReducer } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const reducerFn = (state, action) => {
        switch (action.type) {
            case "SELECT_DATE":
                return {
                    ...state,
                    selectedDate: action.payload,
                }
            case "SELECT_SLOT":
                return {
                    ...state,
                    selectedSlot: action.payload
                }
            case "UPDATE_TIMESLOTS":
                return {
                    ...state,
                    timeslots: action.payload,
                }
            case "SET_ERROR":
                return {
                    ...state,
                    error: action.payload
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducerFn, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export const initialState = {
    timeslots: [],
    selectedDate: "",
    selectedSlot: {
        slotDate: "",
        duration: "",
        start_time: "",
        end_time: ""
    },
    error: ""
};