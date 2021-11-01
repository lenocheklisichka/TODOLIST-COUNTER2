import React, {ChangeEvent} from "react";
import {InitialStateType} from "./bll/counter-reducer";

type SettingsPropsType = {
    state: InitialStateType
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onClickButton: () => void
}

export function SettingsDisplay(props: SettingsPropsType) {
    return (
        <div>
            <div className='settings-value'>
                <div className='value'>max value:</div>
                <input type={'number'} value={props.state.maxValue}
                    className={props.state.startValue >= 0 && props.state.maxValue >= 0
                    && props.state.startValue < props.state.maxValue ? 'input' : 'error'}
                       onChange={props.changeMaxValue}/>
            </div>
            <div className='settings-value'>
                <div className='value'>start value:</div>
                <input type={'number'} value={props.state.startValue}
                       className={props.state.startValue >= 0 && props.state.maxValue >= 0 &&
                       props.state.startValue < props.state.maxValue ? 'input' : 'error'}
                       onChange={props.changeStartValue}/>
            </div>
        </div>
    )
}