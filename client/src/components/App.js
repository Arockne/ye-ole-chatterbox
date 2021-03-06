// client/src/components/App.js
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from './Login'
import Header from './Header'
import Chatroom from "./Chatroom";
import ChatroomSearch from "./ChatroomSearch";
import MembershipNav from "./MembershipNav";
import Welcome from './Welcome'
import UserProfile from "./UserProfile";

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

  function handleUser(user) {
    setUser(() => user)
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
        <Route path="/" element={<Header handleUser={handleUser} user={user}/>}>
          <Route path="chatrooms" element={<MembershipNav memberships={user.memberships}/>}>
            <Route path=":chatroomId/*" element={<Chatroom user={user} handleChatroomMembershipWithdrawal={handleChatroomMembershipWithdrawal}/>}/>
          </Route>
          <Route path="chatrooms/search" element={<ChatroomSearch handleChatroomMembership={handleChatroomMembership} />}/>
          <Route index element={<Welcome user={user}/>} />
          <Route path="profile" element={<UserProfile user={user} handleUser={handleUser} />}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/> }/>
      </Routes>
    )
  }

  return (
    <div className={!user ? 'login' : 'main-site-container'}>
      { !user ? unauthorizedUser() : authorizedUser() }
    </div>
  );
}

export default App;
