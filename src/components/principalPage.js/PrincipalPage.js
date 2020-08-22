import React, {Fragment, useContext, useEffect} from 'react';
import styled from '@emotion/styled';

import Header from '../Header';
import SearchForm from './SearchForm';
import ViewCountries from './ViewCountries';

import CountryContext from '../../context/countryContext';

const Main = styled.main`
    background-color: #fafafa;
    padding-top: 4rem;
    min-height: 100vh;
`;

const SectionForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
    padding-bottom: 4rem;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const PrincipalPage = () => {

    const countryContext = useContext(CountryContext);
    const { saveCountriesApi, themeColor } = countryContext;

    useEffect( () => {
        saveCountriesApi();
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        if(themeColor) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [themeColor]);

    return ( 
        <Fragment>
            <Header />

            <Main>
            <SectionForm>
                <SearchForm />
            </SectionForm>

            <ViewCountries />
            </Main>
        </Fragment>
    );
}

export default PrincipalPage;