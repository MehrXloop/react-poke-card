import React from 'react'
import UseFetch from '../Hooks/UseFetch'

function Pokemon(props) {
    const fetch = UseFetch({url:'https://pokeapi.co/api/v2/pokemon',name:props.name});
  return (
    <>
    {!fetch.loading && fetch.data.length !== 0 ?
        <>
            <img src={fetch.data.sprites.other.home.front_default} alt=''/>
            <div>
                {fetch.data.stats.map(stat => <p>{stat.stat.name} : {stat.base_stat}</p>)}
            </div>
            <div>
                <p>Height : {fetch.data.height}</p>
                <p>Weight : {fetch.data.weight}</p>
            </div>
        </>
        : null }
    </>
    
  )
}

export default Pokemon