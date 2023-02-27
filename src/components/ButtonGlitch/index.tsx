import React from 'react';
import { IButtonGlitch } from '../../utils/contants';
import './index.css';

export const ButtonGlitch = ({
    title,
    onClick,
}: IButtonGlitch) => {
    return (
        <button type="button" onClick={onClick}>{title}</button>
    )
}