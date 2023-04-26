import React from 'react'
import UseFetch from '../Hooks/UseFetch'

function Pokemon(props) {
  const fetch = UseFetch({ url: 'https://pokeapi.co/api/v2/pokemon', name: props.name });
  return (
    <div className='pokemon-card'>
      {!fetch.loading && fetch.data.length !== 0 ?
        <>
          <h1 className='heading'>{props.name.toUpperCase()}</h1>
          <div className="pokemon-card-flex">
            <div className="pokemon-card-flex-1">
              <img width='400' src={fetch.data.sprites.other.home.front_default} alt='' />
            </div>
            <div className="pokemon-card-flex-2">
              <div>
                <h2>Stats:</h2>
                {fetch.data.stats.map(stat => <p key={stat.stat.name}>{stat.stat.name} : {stat.base_stat}</p>)}
              </div>
              <div>
                <h2>Abilities:</h2>
                {fetch.data.abilities.map(ab => <p>{ab.ability.name}</p>)}
              </div>
            </div>



          </div>
        </>
        : null}
    </div>

  )
}

export default Pokemon