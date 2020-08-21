import React, {useState, useContext, useEffect} from 'react';
import styled from '@emotion/styled';

import Country from './Country';
import CountryContext from '../../context/countryContext';

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

    const countryContext = useContext(CountryContext);
    const { countriesSearch } = countryContext;

    return (  
        <SectionCountries>
            {countriesSearch.map(countrie => (<Country 
                    key={countrie.name}
                    countrie={countrie}
                />
            ))} 
            <h1>Hi</h1>
        </SectionCountries>
    );
}

export default ViewCountries;