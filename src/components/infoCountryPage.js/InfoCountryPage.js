import React, { Fragment } from 'react'
import Header from '../principalPage.js/Header'; 

import styled from '@emotion/styled';
import {useParams} from 'react-router-dom'

const InfoCountryPage = () => {

    const {name} = useParams();

    return ( 
        <Fragment>
            <Header />
        </Fragment>
    );
}

export default InfoCountryPage;