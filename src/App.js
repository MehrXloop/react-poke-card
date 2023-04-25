import { useState } from "react";
import "./App.css";
import Pokemon from "./Components/Pokemon";
import UseFetch from "./Hooks/UseFetch";
import Sidebar from "./Components/Sidebar";

function App() {
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
    <div className="App">
      <div>
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

export default App;
