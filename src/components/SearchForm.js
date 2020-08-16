import React, { Fragment, useContext, useState} from 'react';
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

const SearchForm = () => {

    const { saveCountryName, saveSearchCountryByRegion } = useContext(CountryContext);

    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const filterSearch = e => {
        saveSearchCountryByRegion(false);
        saveCountryName(e.target.value)
    }

    const filterSearchByRegion = e => {
        saveSearchCountryByRegion(true);
        saveCountryName(e.target.value)
    }

    return ( 
        <Fragment>
            <FormSearch>
                <label>
                    <i className="fas fa-search"></i>
                    <input
                    type="text"
                    name="search"
                    placeholder="Search for a country..."
                    onChange={filterSearch}
                    />
                </label>
            </FormSearch>

            <SelectForm
                onChange={filterSearchByRegion}
            >
                <option value="all">Filter by region</option>
                {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                ))}
            </SelectForm>
        </Fragment>
    );
}

export default SearchForm;