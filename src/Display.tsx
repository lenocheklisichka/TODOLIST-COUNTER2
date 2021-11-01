import React from "react";
import {Button} from "./Button";
import {InitialStateType} from "./bll/counter-reducer";

type CounterPropsType = {
    incCounterState: () => void;
    resetCounterState: (startValue: number) => void;
    messageDisplaySettings: string
    state: InitialStateType
}

export function Display(props: CounterPropsType) {
    return (
        <div>
            <div className='counter'>
                <div className={props.state.displayValue === props.state.maxValue ? "disabled" : ""}
                     style={{paddingTop: "55px", fontSize: '50px'}}>{props.state.displayValue || props.messageDisplaySettings }</div>
            </div>
            <div className='box-button'>
                <div className='button-counter'>
                    <Button incCounterState={props.incCounterState}
                            resetCounterState={props.resetCounterState}
                            state={props.state}/>
                </div>
            </div>
        </div>
    )
}