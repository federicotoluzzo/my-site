import React from 'react'
import { useState } from 'react';

interface Joke{
    id: number;
    type: string;
    setup : string;
    punchline: string;
}

async function getJokes():Promise<Joke[]>{
    let jokes:Joke[] = []

    const response = await fetch("https://api.sampleapis.com/jokes/goodJokes")

    for (let joke of response.json){
        
    }

    return jokes;
}

const Jokes = () => { 
  const [jokes, getJokes] = useState({})
  const []

  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {map}
    </tbody>
  </table>
</div>
  )
}

export default Jokes