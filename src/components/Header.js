import React from 'react'

export default function Header() {
    return (

        <nav className='header'>
            <ul>
                <img className="logo" src='../images/ocean-bottom-black.png' alt="" />
                <li>Home</li>
                <li>Shares</li>
                <li>Friends</li>
                <input className="shareBtn" type='button'  value="Trade"/>
            </ul>
           
               
           
        </nav>


    )
}
