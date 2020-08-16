import React, {Fragment} from 'react';
import styled from '@emotion/styled';

import Header from './components/Header'
import SearchForm from './components/SearchForm';
import FilterForm from './components/FilterForm';
import ViewCountries from './components/ViewCountries';

import CountryProvider from './context/CountryContext';

const Main = styled.main`
  background-color: #fafafa;
  padding-top: 4rem;
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

function App() {
  return (
    <CountryProvider>
      <Header />

      <Main>
        <SectionForm>
          <SearchForm />
          <FilterForm />
        </SectionForm>

        
        <ViewCountries />
        
      </Main>
      
    </CountryProvider>
  );
}

export default App;
