import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CountryState from './context/countryState';

import PrincipalPage from './components/principalPage.js/PrincipalPage';
import InfoCountryPage from './components/infoCountryPage.js/InfoCountryPage';

function App() {
  return (
    <CountryState>
      <Router>
        <Switch>
          <Route exact path="/" component={PrincipalPage}/>
          <Route exact path="/country/:alpha2Code" component={InfoCountryPage} />
        </Switch>
      </Router>
    </CountryState>
  );
}

export default App;
