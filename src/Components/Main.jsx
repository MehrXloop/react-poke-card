import { useState } from "react";
import Pokemon from './Pokemon'
import Sidebar from './Sidebar'
import UseFetch from "../Hooks/UseFetch";
import './Main.css'

function Main() {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const fetch = UseFetch({ url: url });
    const [activePokemon, setActivePokemon] = useState("bulbasaur");
    function handleActivePokemon(e) {
      setActivePokemon(e.target.innerText);
    }
  
    function handleUrl(e) {
      setUrl(e.target.value);
    }
  
    return (
      <div className="container">
        <div  className="sidebar">
          {!fetch.loading && fetch.data.length !== 0 ? (
            <Sidebar
              data={fetch.data}
              handleActivePokemon={handleActivePokemon}
              handleUrl={handleUrl}
            />
          ) : (
            <p>loading</p>
          )}
        </div>
        <Pokemon name={activePokemon} />
      </div>
    );
}

export default Main