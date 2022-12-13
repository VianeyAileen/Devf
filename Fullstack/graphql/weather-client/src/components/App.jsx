import {useLazyQuery} from '@apollo/client'
import { useState } from 'react';
import { GET_WEATHER_QUERY } from '../graphql/Queries'

import '../styles/App.css'

const App = () => {
  // Declare citySearch state
  const [citySearch, setCitySearch] = useState('')

  // Fetch the GET_WEATHER_QUERY and give the city the new argument {}
  const [getWeather, { loading, error, data }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: {name: citySearch}
  });

  if (error) return <h1>Not Found</h1>

  if (data) {
    console.log(data)
  }

  return (
    <>
      <div className='containerInfo'>
        <h1 className='header'>Search weather info by name</h1>
        <input 
          type="text" 
          placeholder='CityName'
          onChange={(e) => {
            setCitySearch(e.target.value);
          }} />
        <button onClick={() => getWeather()} className='search-btn'>Search</button>
      </div>


      <div className="card">
        <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" alt="City" style={{ width: '100%' }} />

        {data && (
          <div className='container'>
            <h4><b>{data.getCityByName.name}</b></h4>
            <p><span>Temperatura min</span>{data.getCityByName.weather.temperature.min}</p>
            <p><span>Temperatura max</span>{data.getCityByName.weather.temperature.max}</p>
            <h4>
              <b>Wind Information</b>
            </h4>
            <p><span>Speed:</span>{data.getCityByName.weather.wind.speed}</p>
          </div>
        )}
      </div>
    </>

  )
}

export default App
