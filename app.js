import React from 'react';
import { createRoot } from 'react-dom/client';
import { animals } from './animals';

// Get the reference of the container element
const myElement = document.getElementById('app');  // 'app' should match the id in your index.html
const myRoot = createRoot(myElement);  // Use myElement as the reference

// Title for the page (this could be dynamic, but for now we keep a static string)
const title = 'Click an animal for a fun fact!';

// Background image
const background = (
  <img
    className="background"
    alt="ocean"
    src="/images/ocean.jpg"
  />
);

// Display fact function
function displayFact(e) {
  const animalName = e.target.alt;  // Get the animal name based on the alt text
  const animal = animals[animalName];  // Find the animal data from animals.js
  const randomIndex = Math.floor(Math.random() * animal.facts.length);  // Pick a random fact
  const randomFact = animal.facts[randomIndex];  // Get the random fact
  
  // Update the fact on the screen
  document.getElementById('fact').innerHTML = randomFact;
}

// Animal images array
const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}  // Trigger displayFact when an image is clicked
    />
  );
}

// JSX for rendering the title, background, animal images, and fact display area
const animalFacts = (
  <div>
    {background}  {/* Show the background if available */}
    <h1>{title}</h1>
    <div className="animals">{images}</div>  {/* Display animal images */}
    <p id="fact"></p>  {/* Placeholder for displaying facts */}
  </div>
);

// Rendering the JSX to the root element
myRoot.render(animalFacts);
