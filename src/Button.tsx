import React from "react";
import {InitialStateType} from "./bll/counter-reducer";

type ButtonPropsType = {
    incCounterState: () => void
    resetCounterState: (startValue: number) => void
    state: InitialStateType
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    const correctIsDisabled =  props.state.startValue === props.state.maxValue ||props.state.displayValue === props.state.maxValue || props.state.maxValue < props.state.startValue
    return (
        <div className='button-counter'>
            <button onClick={props.incCounterState} disabled={correctIsDisabled} className="button-inc">inc</button>
            <button onClick={() => props.resetCounterState(props.state.startValue)} className='button-reset'
                    disabled={props.state.startValue === props.state.maxValue || props.state.maxValue < props.state.startValue}>
                reset
            </button>
        </div>
    )
}