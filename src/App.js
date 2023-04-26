import Main from "./Components/Main";
import logo from "./pokeapi.png"
import './App.css'
function App() {
  return (
    <>
    <img src={logo} height='80' alt="logo" className="logo"/>
   <Main/>
    </>
  );
}

export default App;
