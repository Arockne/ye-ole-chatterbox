// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Login'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/api/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((userData) => setUser(() => userData))
        }
      })
  }, []);

  function handleUserLogin(userWhoLoggedIn) {
    setUser(user => userWhoLoggedIn)
  }

  if (!user) {
    return <Login handleUserLogin={handleUserLogin}/>
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/hello" element={<h1>Test Route</h1>}/>
          <Route path="/" element={<h1>Page Count: {'Successful Login'}</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;