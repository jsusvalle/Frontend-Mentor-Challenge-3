import React, {useState, useContext, useEffect} from 'react';
import styled from '@emotion/styled';

import Country from './Country';

import {CountryContext} from '../context/CountryContext';

const SectionCountries = styled.div`
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    grid-row-gap: 4rem;
    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
    }
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const ViewCountries = () => {

    // const [error, saveError] = useState(false);
    const { countriesResult } = useContext(CountryContext);

    if(Object.keys(countriesResult).length === 0) return null;

    return (  
        <SectionCountries>
            {countriesResult.map(countrie => (<Country 
                    key={countrie.name}
                    countrie={countrie}
                />
            ))} 
        </SectionCountries>
    );
}

export default ViewCountries;