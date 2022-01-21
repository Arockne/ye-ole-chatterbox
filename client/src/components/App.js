// client/src/components/App.js
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Login from './Login'
import Header from './Header'
import Chatroom from "./Chatroom";
import ChatroomSearch from "./ChatroomSearch";
import MembershipNav from "./MembershipNav";

function App() {
  const [user, setUser] = useState(null)
  const [authenticated, setauthenticated] = useState(false)

  useEffect(() => {
    fetch("/api/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((userData) => { 
            setUser(() => userData)
            setauthenticated(authenticated => !authenticated) 
          })
        } else {
          setauthenticated(authenticated => !authenticated)
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

  function handleChatroomMembershipWithdrawal(chatroom) {
    setUser(user => {
      const updatedUser = { ...user };
      updatedUser.memberships = user.memberships.filter(membership => membership.id !== chatroom.id)
      return updatedUser
    })
  }

  function unauthorizedUser() {
    if (!authenticated) {
      return <div></div>
    } else {
      return <Login handleUser={handleUser}/>
    }
  }

  function authorizedUser() {
    return (
      <Routes>
        <Route path="/" element={<Header setUser={setUser}/>}>
          <Route path="chatrooms" element={<MembershipNav memberships={user.memberships}/>}>
            <Route path=":id" element={<Chatroom user={user} handleChatroomMembershipWithdrawal={handleChatroomMembershipWithdrawal}/>}/>
          </Route>
          <Route path="chatrooms/search" element={<ChatroomSearch handleChatroomMembership={handleChatroomMembership} />}/>
          <Route index element={<MembershipNav memberships={user.memberships}/>}/>
        </Route>
      </Routes>
    )
  }

  return (
    <div>
      {!user ? ( unauthorizedUser() ) : ( authorizedUser() )}
    </div>
  );
}

export default App;