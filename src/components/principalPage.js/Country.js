import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

import CountryContext from '../../context/countryContext';

const Card = styled.div`
    width: 270px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #ffffff;
    transition: background-color .5s ease;
    &:hover {
        cursor: pointer;
        background-color: rgba(0,0,0,.2);
    }
    img {
        width: 100%;
        border-radius: 5px 5px 0px 0px;
        height: 160px;
        object-fit: cover;
        vertical-align: top;
    }
    .title {
        font-size: 1.6rem;
    }
    h3, p {
        font-weight: bold;
        margin-left: 3rem;
    }
    p:last-child {
        margin-bottom: 2.5rem;
    }
    span {
        font-weight: normal;
    }
`;

const Country = ({countrie}) => {

    const countryContext = useContext(CountryContext);
    const { selectInfoCountry } = countryContext;

    const { flag, name, population, region, capital} = countrie;

    return (  
        <Card
            
        >
            <img loading="lazy" src={flag} alt={name} />
            <h3 className="title">{name}</h3>
            <p>Population: <span>{population}</span></p>
            <p>Region: <span>{region}</span></p>
            <p>Capital: <span>{capital}</span></p>
            <Link to={`/country/${countrie.alpha2Code}`} onClick={() => selectInfoCountry(countrie)} >{name}</Link>
        </Card>
    );
}

export default Country;