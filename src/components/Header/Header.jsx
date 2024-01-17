import React from 'react';
import "./header.css"

const Header = ({CurrentNumber,CurrentFact}) => {
    return (
        <>
           <div className={'head'}>
                <p>{CurrentNumber}</p>
                <p className={'CustomFact'} >{CurrentFact} </p>
            </div>
        </>
    );
};

export default Header;