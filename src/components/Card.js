import React from 'react'

export default function Card(props) {



    return (
        <div>
            <div  className='card-content'>
                <div className='card'>
                    <img src={props.img} alt="" />
                    <h1 className='card-title'>{props.title}</h1>
                    <p className='card-description'>{props.description}</p>
                    <input className="pokeBtn" type='button' value="poke seller" />
                </div>
            </div>

        </div>
    )
}
