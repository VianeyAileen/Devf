import NavBar from './components/NavBar'
import './syles/App.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'

function App () {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3000/'
  })
  return (
    <Router>
      <ApolloProvider client={client}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createNote' element={<Form />} />
        </Routes>
      </ApolloProvider>
    </Router>
  )
}

export default App
