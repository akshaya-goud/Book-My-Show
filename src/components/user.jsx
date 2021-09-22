import React, { useState, useEffect } from "react";

const User = (props) => {
    const[planet, setPlanet]  = useState("earth");

//componetDidMount
    useEffect(() => {

        console.log("component mounting");
        //componentWillUnmount
        return console.log("Bye-Bye");
    } , []);

//componentDidUpdate
    useEffect(() => {
        console.log("planet changed");
    }, [planet]);

    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button onClick={() => setPlanet("pluto")}>
                {planet}
            </button>
        </div>
    );
};


export default User;
