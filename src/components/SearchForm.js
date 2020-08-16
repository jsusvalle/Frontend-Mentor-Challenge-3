import React, { useContext, useState} from 'react';
import styled from '@emotion/styled';
import {CountryContext} from '../context/CountryContext';

const FormSearch = styled.form`
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 9px 0px;
    border-radius: 5px;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
        margin-bottom: 0;
    }
    label {
        display: inline-block;
        padding: 1.5rem .5rem;
        width: 100%;
        background-color: #ffffff;
        @media (min-width: 768px) {
            width: 45rem;
        }
        i {
            margin: 0 2rem;
            color: #c4c4c4;
        }
        input {
            border: none;
            font-size: 1.4rem;
        }
    }
`;

const SearchForm = () => {

    const { saveCountryName } = useContext(CountryContext);

    return ( 
        <FormSearch>
            <label>
                <i className="fas fa-search"></i>
                <input
                type="text"
                name="search"
                placeholder="Search for a country..."
                onChange={ e => (saveCountryName(e.target.value))}
                />
            </label>
        </FormSearch>
    );
}

export default SearchForm;