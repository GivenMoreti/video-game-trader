import React from "react";

export default function Card(props) {



    return (
        <div className="card-container">
            <div className="card">
                <img src={props.img} alt="" />
                <span className="item-status">{(props.available ? "In stock" : "Sold Out")}</span>
                <div className="card-text-content">
                    <h2 className="card-title">{props.title}</h2>
                    <h3 className="card-description">{props.description}</h3>
                    <h4 className="quantity">⭐({props.quantity})</h4>
                    <h4 className="seller">sold by @{props.seller}</h4>
                </div>
                <input className="pokeBtn" type="button" value="Poke" />
            </div>
        </div>
    );
}
