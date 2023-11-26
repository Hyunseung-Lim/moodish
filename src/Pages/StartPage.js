import React from 'react'
import { Link } from 'react-router-dom';

export const StartPage = (props) => {

    return(
        <>
            <img className='logo' src='logo512.png' alt='logo'/>
            <Link to = {'/ingredient'} className='selectbutton'>
                Start
            </Link>
        </>
    )
}