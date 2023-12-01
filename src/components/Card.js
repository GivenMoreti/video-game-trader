import React from "react";

export default function Card(props) {
    const pokeFunction = () => {
        alert("poked");
        alert(this.Card);
    };

    



    let stars = "⭐";
    if (props.quantity) {
        stars = stars = stars.repeat(props.quantity);
    } else if (props.quantity == 0) {
        stars = "";
    }
    return (
        <div className="card-container">
            <div className="card">
                <img src={props.img} alt="" />
                <span className="item-status">
                    {props.available ? "In stock" : "Sold Out"}
                </span>
                <div className="card-text-content">
                    <h2 className="card-title">{props.title}</h2>
                    <h3 className="card-description">{props.description}</h3>
                    <h4 className="quantity">{stars}</h4>
                    <h4 className="seller">sold by @{props.seller}</h4>
                </div>
                <input
                    className="pokeBtn"
                    type="button"
                    value="Poke"
                    onClick={pokeFunction}
                />
            </div>
        </div>
    );
}
