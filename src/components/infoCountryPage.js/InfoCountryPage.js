import React, { Fragment, useEffect, useState } from 'react'
import Header from '../Header'; 

import axios from 'axios';
import styled from '@emotion/styled';
import {useParams, useHistory} from 'react-router-dom'

const ContainerCountryPage = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 5rem;
    @media (min-width: 768px) {
        justify-content: center;
        gap: 2rem; 
        display: grid;
        width: 85%;
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    button {
        padding: 1rem 2.5rem;
        border: none;
        background-color: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 2px 2px;
        margin-bottom: 5rem;
        cursor: pointer;
        width: 120px;
        i {
            margin-right: 1rem;
        }
    }
    img {
        min-height: 240px;
        max-height: 300px;
        min-width: 240px;
        max-width: 400px;
    }
`;

const ContainerRight = styled.div`
    h2 {
        font-size: 2.4rem;
        margin-top: 4rem;
        @media (min-width: 768px) {
            margin-top: 10rem;
        }
    }
    .container-flex {
        @media (min-width: 768px) {
            display: flex;
            justify-content: space-between;
        }
    }
    p {
        font-size: 1.6rem;
        font-weight: bold;
        span {
            font-weight: initial;
        }
        .languages-text::before {
            content: ', ';
        }
        .languages-text:first-of-type::before {
                content: '';
            }
    }
    
    .border {
        font-size: 1.3rem;
        display: inline-block;
        box-shadow: rgba(0, 0, 0, 0.06) 2px 2px 2px 2px;
        padding: .5rem 2rem;
        margin-left: 2rem;
        margin-top: 1rem;
    }
    
`;

const InfoCountryPage = () => {

    const [countryInfo, saveCountryInfo] = useState({});

    const {alpha2Code} = useParams();

    useEffect( () => {
        const consultApiCountryInfo = async () => {
            const result = await axios.get(`https://restcountries.eu/rest/v2/alpha/${alpha2Code}`);
            saveCountryInfo(result.data);
        }
        consultApiCountryInfo();
        // eslint-disable-next-line
    }, []);

    
    let history = useHistory();
    const goBackBtn = () => {
        history.goBack();
    }
    
    if(Object.keys(countryInfo).length === 0) return null;

    const { name, flag, nativeName, population, region, subregion, capital, topLevelDomain, currencies,borders, languages} = countryInfo;
    const currencie = currencies[0].name;

    return ( 
        <Fragment>
            <Header />

            <ContainerCountryPage>
                <ContainerLeft>
                    <button
                        onClick={goBackBtn}
                    ><i className="fas fa-long-arrow-alt-left"></i> Back</button>

                    <img src={flag} alt={name}/>
                </ContainerLeft>

                <ContainerRight>
                    <h2>{name}</h2>
                    <div className="container-flex">
                        <div>
                            <p>Native Name: <span>{nativeName}</span></p>
                            <p>Population: <span>{population}</span></p>
                            <p>Region: <span>{region}</span></p>
                            <p>Sub Region: <span>{subregion}</span></p>
                            <p>Capital: <span>{capital}</span></p>
                        </div>
                        <div>
                            <p>Top Level Domain: <span>{topLevelDomain}</span></p>
                            <p>Currencies: <span>{currencie}</span></p>
                            <p>Languages: {languages.map(language => <span className="languages-text" key={language.name}>{language.name}</span>)}</p>
                        </div>
                    </div>

                    <p>Border Countries: {borders.map(border => <span className="border" key={border}>{border}</span>)}</p>
                </ContainerRight>
            </ContainerCountryPage>
        </Fragment>
    );
}

export default InfoCountryPage;