import React from 'react';
import { ICardColorful } from '../../utils/contants';
import './index.css';

export const CardColorful = ({
    content,
}: ICardColorful) => {
    return (
        <>
            <div className="card_code">
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                    </div>
                    <div className="circle">
                        <span className="yellow box"></span>
                    </div>
                    <div className="circle">
                        <span className="green box"></span>
                    </div>
                </div>
                <div className="card__content">
                    {content}
                </div>
            </div>
        </>
    )
}