import React from "react";
import {useState, useEffect} from 'react';

function Jokes(){
    const [joke,setJoke] = useState({});
    useEffect(()=>{
       fetch('https://official-joke-api.appspot.com/jokes/random')
       .then(response => response.json())
       .then( json => 
        {console.log('joke , json', json);
        setJoke(json);
    });
    },[])
    const {setup, punchline} = joke;
    return(
        <div>
            <h2>Joke</h2>
            <h3>{setup}</h3>
            <em>{punchline}</em>
        </div>
    )
}

export default Jokes;