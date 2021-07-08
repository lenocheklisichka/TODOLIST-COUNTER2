import React from "react";

type ButtonPropsType = {
    title: string;
    className: string;
    disabled: boolean;
    onClick: () => void;
    state: boolean
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <div>
            <button className={props.className} onClick={props.onClick} disabled={props.disabled} >{props.title}</button>
        </div>
    )
}