import React, {useState} from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'

import Navbar from "./components/Navbar";
import Planets from './components/Planets'
import People from './components/People'




function App() {
  const [page, setPage] = useState('planets')

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === 'planets' ? <Planets /> : <People /> }
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
