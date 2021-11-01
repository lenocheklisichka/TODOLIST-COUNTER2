import React, {ChangeEvent, useEffect} from 'react';
import './App.css';
import {SettingsDisplay} from "./SettingsDisplay";
import {Display} from "./Display";
import {useDispatch, useSelector} from "react-redux";
import {
    incCounterStateAC,
    InitialStateType,
    setDisplayValue,
    resetCounterStateAC, setMaxValueAC, setStartValueAC, setStatusValueAC,
} from "./bll/counter-reducer";
import {AppStateType} from "./bll/store";


function App() {
    const dispatch = useDispatch()
    let state = useSelector<AppStateType, InitialStateType>(state => state)
    let messageDisplaySettings = state.status === 'Settings' ? "Enter values and press 'set'"  :
                                 state.status === 'Error' ? 'Incorrect value!': "0"

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setStartValueAC(+e.currentTarget.value))
         if(state.startValue >= 0 && state.maxValue >= 0 && state.startValue < state.maxValue){
            return dispatch(setStatusValueAC("Settings"))
        } else {
            return dispatch(setStatusValueAC("Error"))
        }
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
        if( state.maxValue >= 0 && state.startValue <= state.maxValue){
            return dispatch(setStatusValueAC("Settings"))
        } else {
            return dispatch(setStatusValueAC("Error"))
        }
    };

    const incCounterState = () => {
         dispatch(incCounterStateAC())
    }

    const resetCounterState = (startValue: number) => {
        dispatch(resetCounterStateAC(startValue))
    }

    const onClickButton = () => {
        dispatch(setDisplayValue(state.startValue))
    }

    useEffect(() => {
        let maxValueString = localStorage.getItem('maxValue')
        let startValueString = localStorage.getItem('startValue')
        let valueString = localStorage.getItem('displayValue')

        if (maxValueString && startValueString && valueString) {
            // dispatch(setMaxValueAC(JSON.parse(maxValueString)))
            // dispatch(setStartValueAC(JSON.parse(startValueString)))
            // dispatch(setDisplayValue(JSON.parse(valueString)))
        }
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
        localStorage.setItem('displayValue', JSON.stringify(state.displayValue))
    }, [state])

    return (
        <div className="App">
            <div className='counter-box'>
                <div className='counter'>
                    <div className='block-settings'>
                        <SettingsDisplay
                            changeMaxValue={changeMaxValue}
                            changeStartValue={changeStartValue}
                            onClickButton={onClickButton}
                            state={state}
                        />
                    </div>
                </div>
                <div className='block-button'>
                    <button onClick={onClickButton}
                            disabled={state.maxValue === state.startValue || state.startValue < 0 || state.maxValue < state.startValue}
                            className='button-set'>set
                    </button>
                </div>
            </div>
            <div className='counter-box'>
                <Display
                    messageDisplaySettings={messageDisplaySettings}
                    incCounterState={incCounterState}
                    resetCounterState={resetCounterState}
                    state={state}/>
            </div>
        </div>
    );
}

export default App;
