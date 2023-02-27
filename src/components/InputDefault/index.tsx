import React from 'react';
import { IInputSimples } from '../../utils/contants';
import './index.css';

export const InputSimples = ({
    placeholder,
    style,
    onChange,
}: IInputSimples) => {
    return (
        <div>
            <input className="input" placeholder={placeholder} style={style} onChange={onChange}/>
        </div>
    )
}