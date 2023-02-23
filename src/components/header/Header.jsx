import React from 'react';
import {BsGrid3X3Gap} from 'react-icons/bs'
import {TfiAlignLeft} from 'react-icons/tfi'
import './header.scss';

const Header = (props) => {
    const { toggleView, view } = props;

    return (
        <header className='header-container'>
            <button onClick={() => toggleView(!view)}>
                {view? <TfiAlignLeft/> : <BsGrid3X3Gap/>}
            </button>
        </header>
    );
};

export default Header;