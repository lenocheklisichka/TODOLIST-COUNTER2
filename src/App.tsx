import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Button} from "./Button";
import Input from "./Input";


type StatusValueType = "Setting" | "Error" | "Counter"

function App() {
    let [counterState, setCounterState] = useState<number>(0);
    let [disabled, setDisabled] = useState<boolean>(true);
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [statusValue, setStatusValue] = useState<StatusValueType>("Counter")

    let values = startValue > 0 && maxValue > 0  && startValue < maxValue;

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        if(values) {
            return setStatusValue("Setting")
        } else {
            return setStatusValue("Error")
        }
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        if (values) {
            return setStatusValue("Setting")
        } else {
            return setStatusValue("Error")
        }
    };

    const setButton = () => {
        setStartValue(startValue)
        setCounterState(startValue)
    };

    useEffect(() => {
        localStorage.setItem("counterKey", JSON.stringify(counterState))
    }, [counterState])

    const changeCounterState = () => {
        setCounterState(++counterState)
        setDisabled(false)
    }

    const resetCounterState = () => {
        setCounterState(0)
        setDisabled(true)
    }
    return (
        <div className="App">
            <div className='counter-box'>
                <div className='counter'>
                    <div className='block-settings'>
                        <div className='settings-value'>
                            <div className='value'>max value:</div>
                            <Input value={maxValue} className={values ? 'input' : 'input-error'} onChange={onChangeMaxValue} />
                        </div>
                        <div className='settings-value'>
                            <div className='value'>start value:</div>
                            <Input value={startValue} className={values ? 'input' : 'input-error'} onChange={onChangeStartValue}/>
                        </div>
                    </div>
                    <div className='block-button'>
                        <Button state={values} title={'set'} className='button-set' disabled={false} onClick={setButton}/>
                    </div>
                </div>
            </div>
            <div className='counter-box'>
                <Display counterState={counterState <= maxValue ? counterState : maxValue}
                         className={counterState === maxValue ? "counter-disabled" : ""}
                         changeCounterState={changeCounterState}
                         resetCounterState={resetCounterState}
                         messagesDisplay={statusValue === 'Error' ? "Incorrect value!" : statusValue === 'Setting' ? "Enter values and press 'set'" : "0" }
                />
                <div className='box-button'>
                    <div className='button-counter'>
                        <Button title={'inc'} className='button-inc'
                                disabled={false} onClick={changeCounterState} state={counterState < maxValue}/>
                        <Button title={'reset'} className='button-reset' disabled={disabled}
                                onClick={resetCounterState} state={counterState > startValue}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
