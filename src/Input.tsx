import React, {ChangeEvent} from "react";

type PropsInputType = {
    value: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className: string
}

function Input(props:PropsInputType) {
    return (
        <div>
            <input type={'number'} value={props.value} className={props.className} onChange={props.onChange}/>
        </div>
    )
}

export default Input;