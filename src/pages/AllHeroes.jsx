import React, { useEffect, useState } from "react";
import "../../src/index.css";

export default function AllHeroes() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function displayCharacters() {
      const response = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      const data = await response.json();
      setCharacters(data);
    }
    displayCharacters();
  }, []);

  return (
    <div>
      <h1>All Superheroes</h1>
      <form className="search-form">
        <input type="text" placeholder="enter a hero"></input>
        <button type="submit">Search</button>
      </form>
      <div className="grid-container">
        {characters.map((hero, index) => (
          <div key={index} className="grid-item">
            <img src={hero.images.md} alt={hero.name} />
            <br />
            {hero.name}
          </div>
        ))}
      </div>
    </div>
  );
}
