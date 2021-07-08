import React from "react";

type CounterPropsType = {
    counterState: number;
    changeCounterState: () => void;
    resetCounterState: () => void;
    messagesDisplay: string
    className: string
}

export function Display(props: CounterPropsType) {
    return (
        <div className='counter'>
            <div style={{paddingTop: "45px", fontSize: '35px'}}>{props.counterState || props.messagesDisplay}</div>
        </div>
    )
}