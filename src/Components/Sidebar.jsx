import React from "react";

function Sidebar(props) {
  function handleActivePokemon(e) {
    props.handleActivePokemon(e);
  }
  return (
    <div>
      <div className="button-container">
        {props.data.previous !== null ? <button value={props.data.previous} onClick={props.handleUrl}>Previous</button> : null}

        <button value={props.data.next} onClick={props.handleUrl}>Next</button>
      </div>
      <ul>
        {props.data.results.map((item) => (
          <li onClick={handleActivePokemon} key={item.name}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
