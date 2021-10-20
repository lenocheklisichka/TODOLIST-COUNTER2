import React, {ChangeEvent,useState} from 'react';
import './App.css';
import {SettingsDisplay} from "./SettingsDisplay";
import {Display} from "./Display";

type StatusType = "Settings" | "Error"

function App() {
    let [displayValue, setDisplayValue] = useState<number>(0);
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [status, setStatus] = useState<StatusType>()
    let messageDisplaySettings = status === 'Settings' ? "Enter values and press 'set'"  :
                                 status === 'Error' ? 'Incorrect value!': "0"

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
         if(startValue >= 0 && maxValue >= 0 && startValue < maxValue){
            return setStatus("Settings")
        } else {
            return setStatus("Error")
        }
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        if(startValue >= 0 && maxValue >= 0 && startValue <= maxValue){
            return setStatus("Settings")
        } else {
            return setStatus("Error")
        }
    };

    const setOnClickButton = () => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setDisplayValue(startValue)
    };

    const incCounterState = () => {
        setDisplayValue(++displayValue)
    }

    const resetCounterState = () => {
        setDisplayValue(startValue)
    }
    return (
        <div className="App">
            <div className='counter-box'>
                <div className='counter'>
                    <div className='block-settings'>
                        <SettingsDisplay
                            maxValue={maxValue}
                            startValue={startValue}
                            changeMaxValue={changeMaxValue}
                            changeStartValue={changeStartValue}
                            setOnClickButton={setOnClickButton}
                        />
                    </div>
                </div>
                <div className='block-button'>
                    <button onClick={setOnClickButton}
                            disabled={ maxValue === startValue || startValue < 0}
                            className='button-set'>set
                    </button>
                </div>
            </div>
            <div className='counter-box'>
                <Display
                    displayValue={displayValue}
                    maxValue={maxValue}
                    messageDisplaySettings={messageDisplaySettings}
                    startValue={startValue}
                    incCounterState={incCounterState}
                    resetCounterState={resetCounterState}
                />
            </div>
        </div>
    );
}

export default App;
