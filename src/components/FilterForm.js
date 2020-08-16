import React, {useContext, useState} from 'react';
import styled from '@emotion/styled';

import {CountryContext} from '../context/CountryContext';

const SelectForm = styled.select`
    padding: 2rem 2rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 9px 0px;
    border: none;
    text-align: center;
    font-size: 1.4rem;
    -webkit-appearance: none;
    cursor: pointer;
`;

const FilterForm = () => {

    const { saveContruiesByRegions } = useContext(CountryContext);
    
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const confirmSearch = e => {
        if(e.target.value === '') return;
    
        saveContruiesByRegions(e.target.value)
    }

    return ( 
        <SelectForm
            onChange={confirmSearch}
        >
            <option value="">Filter by region</option>
            {regions.map(region => (
                <option key={region} value={region}>{region}</option>
            ))}
        </SelectForm>
    );
}

export default FilterForm;