import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
    width: 270px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #ffffff;
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
    span {
        font-weight: inherit;
    }
`;

const Country = ( {countrie}) => {

    const {name,population,region,capital,flag} = countrie;

    return (  
        <Card>
            <img loading="lazy" src={flag} alt={name} />
            <h3 className="title">{name}</h3>
            <p>Population: <span>{population}</span></p>
            <p>Region: <span>{region}</span></p>
            <p>Capital: <span>{capital}</span></p>
        </Card>
    );
}

export default Country;