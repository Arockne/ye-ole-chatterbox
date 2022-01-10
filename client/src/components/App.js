// client/src/components/App.js
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Login from './Login'
import Header from './Header'
import ChatroomSearch from "./ChatroomSearch";
import MembershipNav from "./MembershipNav";

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

  function handleChatroomMembership(chatroom) {
    setUser(user => {
      const updatedUser = { ...user }
      updatedUser.memberships = [ ...user.memberships, chatroom ]
      return updatedUser;
    })
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
        <Route path="/" element={<Header setUser={setUser}/>}>
          <Route path="chatrooms" element={<MembershipNav memberships={user.memberships}/>}/>
          <Route path="chatrooms/search" element={<ChatroomSearch handleChatroomMembership={handleChatroomMembership}/>}/>
          <Route index element={<MembershipNav memberships={user.memberships}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;