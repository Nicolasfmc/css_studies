import React, { useState } from 'react';
import './index.css';
import { InputSimples } from '../../components/InputDefault';
import { Checkmark } from '../../components/Checkmark';
import { ButtonGlitch } from '../../components/ButtonGlitch';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [checked, setChecked] = useState(true);
    const [name, setName] = useState<string>('');

    const handleChangeName = (value: string) => {
        setName(value);
    }

    const navigate = useNavigate();

    function login(name: string) {
        if(name !== '' && name !== null && name !== undefined){
            localStorage.setItem('Nome', name);
            localStorage.setItem('Idade', checked ? 'true' : 'false');
            navigate('/Home');
        } else {
            alert('Insira um nome, por favor :)');
        }
    }

    return (
        <div className="body">
            <div className="card">
                <div className="text_div">
                    <h1 className="welcome_h1">Bem Vindo!</h1>
                    <p className="welcome_p">Me conte algumas coisinhas antes de continuarmos:</p>
                </div>
                <div className="input_div">
                    <InputSimples placeholder='Digite seu nome' style={inputStyles} onChange={(e) => handleChangeName(e.target.value)}/>
                    <div className="checkmark_div">
                        <p>Maior de idade?</p>
                        <Checkmark checked={checked} setChecked={setChecked}/>
                    </div>
                </div>
            </div>
            <div className="button">
                <ButtonGlitch title='CONFIRMAR' onClick={() => login(name)}/>
            </div>
        </div>
    )
}

const inputStyles: React.CSSProperties = {
    width: 250,
    height: 40,
    textAlign: 'center',
}