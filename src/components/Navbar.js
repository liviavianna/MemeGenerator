import React from "react";
import trollface from "../assets/trollFace.svg"


export default function Navbar () {
    return (
        <nav>
            <div className="main--title">
            <img src={trollface} alt="trollface" />
            <h1>Meme Generator</h1>
            </div>
            <h4>React Course - Project 3 </h4>
        </nav>
    )
}