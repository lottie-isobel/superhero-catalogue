import {useEffect, useState} from "react";
import {HeroCard} from "../components/index.js";

export default function AllHeroes() {
    const [characters, setCharacters] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        async function displayCharacters() {
            return await fetch("https://akabab.github.io/superhero-api/api/all.json");
        }

        displayCharacters()
            .then(response => response.json())
            .then(setCharacters);
    }, []);

    return (
        <div>
            <h1>All Superheroes</h1>
            <form className="search-form">
                <input type="text"
                       value={searchText}
                       onChange={e => setSearchText(e.target.value.toLowerCase())}
                       placeholder="enter a hero"></input>
                <button type="submit">Search</button>
            </form>
            <div className="grid-container">
                {characters
                    .filter(c => !searchText || c.name.toLowerCase().includes(searchText))
                    .map((hero, index) => <HeroCard hero={hero} key={index}/>)}
            </div>
        </div>
    );
}
