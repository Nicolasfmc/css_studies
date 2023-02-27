import React from 'react';
import './index.css';
import { CardColorful } from '../../components/CardColorful';
import reactLogo from '../../assets/logoReact.png';
import expoLogo from '../../assets/logoExpo.png';
import jsLogo from '../../assets/logoJs.png';
import tsLogo from '../../assets/typescriptLogo.png';
import { Footer } from '../../components/Footer';

interface ICardContent {
    title: string;
    logo: string;
}
const cardContent = ({
    title,
    logo,
}: ICardContent) => {
    return (
        <div className="card_content_div">
            <img src={logo} className="card_content_img"/>
            {title}
        </div>
    )
}

export const Home = () => {
    const name = localStorage.getItem('Nome');
    const getData = new Date();
    function dataAtual() {
        const dia = getData.getDate();
        const mes = getData.getMonth();
        const ano = getData.getFullYear();

        return `${dia}/${mes}/${ano}`;
    } 

    return (
        <>
            <div className="container_div">
                <h1>Oi {name}, obrigado por vir! &#x1F604;</h1>
                <h1>Hoje é {dataAtual()}</h1>
            </div>
            <div className="content_div">
                <h2>Esses são meus conhecimentos Front-End</h2>
            </div>
            <div className="cards_div">
                <CardColorful content={cardContent({title: 'React', logo: reactLogo})}/>
                <CardColorful content={cardContent({title: 'React Native', logo: expoLogo})}/>
                <CardColorful content={cardContent({title: 'JavaScript', logo: jsLogo})}/>
                <CardColorful content={cardContent({title: 'TypeScript', logo: tsLogo})}/>
                <div className="text_div_home">
                    <span>
                        Esse projeto foi um desafio proposto por mim mesmo para ser feito em uma dia,
                        com o intuito de aperfeiçoar minhas técnicas em CSS, espero que você tenha gostado!
                        foi pequeno e simples mas foi uma prática interessante.
                        Pretendo desenvolver mais este projeto e trazer minhas habilidades de Back-end, além de
                        separar melhor o conteúdo em mais páginas.
                    </span>
                </div>
            </div>
            <Footer/>
        </>
    )
}