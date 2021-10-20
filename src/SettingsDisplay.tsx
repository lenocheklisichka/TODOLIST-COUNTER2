import React, {ChangeEvent} from "react";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    setOnClickButton: () => void
}

export function SettingsDisplay(props: SettingsPropsType) {
    return (
        <div>
            <div className='settings-value'>
                <div className='value'>max value:</div>
                <input type={'number'} value={props.maxValue}
                    className={props.startValue >= 0 && props.maxValue >= 0 && props.startValue < props.maxValue ? 'input' : 'error'}
                       onChange={props.changeMaxValue}/>
            </div>
            <div className='settings-value'>
                <div className='value'>start value:</div>
                <input type={'number'} value={props.startValue}
                       className={props.startValue >= 0 && props.maxValue >= 0 && props.startValue < props.maxValue ? 'input' : 'error'}
                       onChange={props.changeStartValue}/>
            </div>
        </div>
    )
}