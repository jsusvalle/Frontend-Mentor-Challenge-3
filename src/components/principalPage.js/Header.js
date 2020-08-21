import React from 'react';
import styled from '@emotion/styled';

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 2.3rem 0;
    margin-bottom: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
    h1 {
        margin: 0 0 0 2rem;
        font-size: 1.8rem;
        @media (min-width: 768px) {
            font-size: 2.4rem;
        }
    }
`;

const ToggleBtn = styled.div`
    margin: 0 2rem 0 0;
    display: flex;
    align-items: center;
    input {
        display: none;
        &:checked~label .fa-moon {
                    background-color: #ffffff;
                    color: #ffffff;
                }
    }
    label {
        p {
            margin: 0;
            font-size: 1.2rem;
            cursor: pointer;
            @media (min-width: 768px) {
                font-size: 1.8rem;
            }
            span .fa-moon {
                transform: rotate(-25deg);
            }
        } 
    } 
`;

const Header = () => {
    return ( 
        <ContainerHeader>
            <h1>Where in the world?</h1>
            <ToggleBtn>
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">
                        <p><span><i className="far fa-moon"></i></span> Dark Mode</p>
                    </label>
            </ToggleBtn>
        </ContainerHeader>
    );
}

export default Header;