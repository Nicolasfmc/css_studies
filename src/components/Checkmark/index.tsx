import React, { useState } from 'react';
import { ICheckmark } from '../../utils/contants';
import './index.css';

export const Checkmark = ({
    checked,
    setChecked,
}: ICheckmark) => {
    return (
        <label className="container">
            <input checked={checked} type="checkbox" onChange={() => setChecked(!checked)}/>
            <div className="checkmark"></div>
        </label>
    )
}