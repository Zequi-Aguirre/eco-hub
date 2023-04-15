import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './invasive-animals-band.css';

export default function InvasiveAnimalsBand() {
  const [animalNames, setAnimalNames] = useState([]);

  useEffect(() => {
    axios.get('/api/animals')
      .then(res => {
        setAnimalNames(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const handleClick = (name) => {
    console.log(`Clicked on ${name}`);
    // Add your code here to handle routing to the animal's informational page
  }

  const randomAnimalName = animalNames[Math.floor(Math.random() * animalNames.length)];

  return (
    <div className="band">
      <div className="slideshow-container">
        <p className="band-text">Click on a Species to learn more</p>
        {animalNames.map(name => (
          <div key={name} className={`slide ${name === randomAnimalName ? 'active' : ''}`} onClick={() => handleClick(name)}>
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}