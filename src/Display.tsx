import React from "react";
import {Button} from "./Button";

type CounterPropsType = {
    incCounterState: () => void;
    resetCounterState: () => void;
    startValue: number
    maxValue: number
    displayValue: number
    messageDisplaySettings: string
}

export function Display(props: CounterPropsType) {
    return (
        <div>
            <div className='counter'>
                <div className={props.displayValue === props.maxValue ? "disabled" : " "}
                     style={{paddingTop: "55px", fontSize: '50px'}}>{props.displayValue || props.messageDisplaySettings }</div>
            </div>
            <div className='box-button'>
                <div className='button-counter'>
                    <Button incCounterState={props.incCounterState}
                            resetCounterState={props.resetCounterState}
                            displayValue={props.displayValue}
                            maxValue={props.maxValue}
                            startValue={props.startValue}
                    />
                </div>
            </div>
        </div>
    )
}