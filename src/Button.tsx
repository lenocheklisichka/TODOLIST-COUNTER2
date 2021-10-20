import React from "react";

type ButtonPropsType = {
    incCounterState: () => void
    resetCounterState: () => void
    startValue: number
    maxValue: number
    displayValue: number
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    const correctIsDisabled = props.displayValue === props.maxValue
    return (
        <div className='button-counter'>
            <button onClick={props.incCounterState} disabled={correctIsDisabled} className="button-inc">inc</button>
            <button onClick={props.resetCounterState} className='button-reset' disabled={props.startValue === props.maxValue}/*disabled={props.disabled}*/ >
                reset
            </button>
        </div>
    )
}