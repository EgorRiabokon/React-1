import React from 'react';
import "./header.css"

const Header = ({CharacterName,CharacterImage}) => {
    return (
        <>
           <div className={'head'}>
                <p>{CharacterName}</p>
                <img className={'CustomImage'} src={CharacterImage} alt=""/>
            </div>
        </>
    );
};

export default Header;