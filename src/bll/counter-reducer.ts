
type IncCounterStateAT = {
    type: "INC-COUNTER-STATE"
}

type ResetCounterStateAT = {
    type: "RESET-COUNTER-STATE"
    startValue: number
}

type SetMaxValueAT = {
    type: 'SET-MAX-VALUE'
     maxValue: number
}

type SetStartValueAT = {
    type: 'SET-START-VALUE'
    startValue: number
}

type SetStatusValueAT = {
    type: "SET-STATUS-VALUE"
    status: string
}

type OnClickButtonAT = {
    type: "ON-CLICK-BUTTON"
    startValue: number
}

const initialState = {
    startValue: 0,
    maxValue: 0,
    displayValue: 0,
    status: "0"
}

export type InitialStateType = typeof initialState

export type ActionType = IncCounterStateAT | ResetCounterStateAT  | OnClickButtonAT | SetStartValueAT | SetMaxValueAT | SetStatusValueAT;

export const counterReducer = (state: InitialStateType = initialState, action: ActionType ): InitialStateType => {
    switch (action.type) {
        case "INC-COUNTER-STATE":
            return {
                ...state, displayValue: state.displayValue + 1
            }
        case "RESET-COUNTER-STATE":
            return {
                ...state, displayValue: action.startValue
            }
        case "SET-MAX-VALUE":
            return {
                ...state,
                maxValue: action.maxValue
            }
        case "SET-START-VALUE":
            return {
                ...state,
                startValue: action.startValue,
            }
        case "SET-STATUS-VALUE" :
            return {
                ...state,
                status: action.status,
            }
        case "ON-CLICK-BUTTON":
            return {...state, displayValue: action.startValue}
        default:
            return state;
    }
}

export const setMaxValueAC = (maxValue: number,): SetMaxValueAT => {
    return {type: 'SET-MAX-VALUE', maxValue}
}

export const setStartValueAC = (startValue: number): SetStartValueAT => {
    return {type: 'SET-START-VALUE', startValue}
}

export const incCounterStateAC = (): IncCounterStateAT => {
    return {type: "INC-COUNTER-STATE"}
}

export const resetCounterStateAC = (startValue: number): ResetCounterStateAT => {
    return {type: "RESET-COUNTER-STATE", startValue}
}

export let setDisplayValue = (startValue: number): OnClickButtonAT => {
    return {type: "ON-CLICK-BUTTON", startValue }
}

export let setStatusValueAC = (status: string): SetStatusValueAT => {
    return {type: "SET-STATUS-VALUE", status }
}
