import React from "react";

function Sidebar(props) {
  function handleActivePokemon(e) {
    props.handleActivePokemon(e);
  }
  return (
    <>
      <div>
        <button value={props.data.previous} onClick={props.handleUrl}>Previous</button>
        <button value={props.data.next} onClick={props.handleUrl}>Next</button>
      </div>
      <div>
        {props.data.results.map((item) => (
          <p onClick={handleActivePokemon} key={item.name}>
            {item.name}
          </p>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
