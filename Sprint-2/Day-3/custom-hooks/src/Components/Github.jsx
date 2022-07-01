import React from 'react'

import { useFetch } from '../Hooks/useFetch';

export const Github = () => {
    const {data, loading, error} = useFetch(
        "https://api.github.com/search/users?q=Masai"
    )


   
  return (
    <div>
        <h2>Github</h2>
        {loading && <h3>...Loading</h3>}
        {data.length > 0 && data.map((item) => {
            return <div key={item.id}>{item.login}</div>
        })}
    </div>
  )
}
