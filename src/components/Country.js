import React, {useState} from 'react';
import styled from '@emotion/styled';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Card = styled.div`
    width: 270px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #ffffff;
    transition: background-color .5s ease;
    &:hover {
        cursor: pointer;
        background-color: rgba(0,0,0,.2);
    }
    img {
        width: 100%;
        border-radius: 5px 5px 0px 0px;
        height: 160px;
        object-fit: cover;
        vertical-align: top;
    }
    .title {
        font-size: 1.6rem;
    }
    h3, p {
        font-weight: bold;
        margin-left: 3rem;
    }
    p:last-child {
        margin-bottom: 2.5rem;
    }
    span {
        font-weight: normal;
    }
`;

const Country = ( {countrie}) => {

    // Configuración del modal de material-ui
    const [ modalStyle ] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const {name,population,region,capital,flag,nativeName,subregion,topLevelDomain,languages,borders} = countrie;

    return (  
        <Card
            onClick={() => handleOpen()}
        >
            <img loading="lazy" src={flag} alt={name} />
            <h3 className="title">{name}</h3>
            <p>Population: <span>{population}</span></p>
            <p>Region: <span>{region}</span></p>
            <p>Capital: <span>{capital}</span></p>

            <Modal
                open={open}
                onClose={ () => handleClose()}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div>
                        <button
                            
                        ><i className="fas fa-long-arrow-alt-left"></i> Back</button>

                        <img className="img-cover" src={flag} alt={name}/>

                        <h2>{name}</h2>
                        <div>
                            <p>Native Name: <span></span></p>
                            <p>Population: <span></span></p>
                            <p>Region: <span></span></p>
                            <p>Sub Region: <span></span></p>
                            <p>Capital: <span></span></p>
                        </div>
                        <div>
                            <p>Top Level Domain: <span></span></p>
                            <p>Currencies: <span></span></p>
                            <p>Languages: <span></span></p>
                        </div>

                        <div>
                            Border Countries:
                        </div>
                        
                    </div>
                </div>
            </Modal>
        </Card>
    );
}

export default Country;