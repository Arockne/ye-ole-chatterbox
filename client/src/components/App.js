// client/src/components/App.js
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Login from './Login'

function App() {
  const [user, setUser] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch("/api/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((userData) => { 
            setUser(() => userData)
            setLoaded(loaded => !loaded) 
          })
        } else {
          setLoaded(loaded => !loaded)
        }
      })
  }, []);

  function handleUser(userUpdate) {
    setUser(user => userUpdate)
  }

  if (!loaded) {
    return <div></div>
  }

  if (!user) {
    return <Login handleUser={handleUser}/>
  }

  return (

      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Page Count: {'Successful Login'}</h1>}/>
          <Route path="/hello" element={<h1>Test Route</h1>}/>
        </Routes>
      </div>

  );
}

export default App;