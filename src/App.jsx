import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from './components/welcome'
import Notfound from './components/NotFound'
import Name from './components/Name'
import Map from './components/map'
import User from './components/User'
import Photo from './components/Photo'
import ClickMe from './components/ClickMe'
import Counter from './components/Counter'
import ColorBox from './components/ColorBox'
import LoginForm from './components/LoginForm'
import PaintDots from './components/PaintDot'
import PaintDot from './components/PaintDot'
import Game from './components/Game'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import UserDetails from './components/UserDetails'
import UserList from './components/UserList'
import userData from './json/userData.json'
import NotFound from './components/NotFound'
import UserPic from './components/UserPic'
import Counter1 from './components/Counter1'
import Client from './components/Client'
import AddUser from './components/AddUser'
import { AddUser2 } from './components/AddUser2'
import { About } from './components/About'
import { AddUser3 } from './components/Adduser3'
import { Register } from './components/Register'
import UserList2 from './components/UserList2'
import { EditUser } from './components/EditUser'


function App() {
  const [count, setCount] = useState(0)
  var username = "Vraj";

  return (

    <>
      {/* <UserPic /> */}
      <nav className='nav-list'>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/client">Client</Link>
        <Link to="/adduser">AddUser</Link>
        <Link to="/adduser2">AddUser2</Link>
        <Link to="/about">About</Link>
        <Link to="/adduser3">AddUser3</Link>
        <Link to="/register">Register</Link>
        <Link to="/edituser">Edit User</Link>
      </nav>

      {/* route is use for routing (path) in reactjs */}
      <Routes>
        {/* <Route path='/' element={<Welcome />} /> */}
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/adduser2' element={<AddUser2 />} />
        <Route path='/adduser3' element={<AddUser3 />} />
        <Route path='/edituser/:id' element={<EditUser />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/' element={<UserList2 />} />
        <Route path='/users/:id' element={<UserDetails />} />
        <Route path='/client' element={<Client />} />

        {/* <Route path='/people' element={<Navigate replace to='/users'/>} />
        <Route path='*' element={<NotFound />} /> */}

      </Routes>
      {/* // <Routes>
    //   <Route path='/' element={<Welcome name={username}/>} />
    //   <Route path='/photo' element={<Photo />} />
    // </Routes> */}
      {/* <Welcome />
      <Map /> */}
      {/* <User /> */}
      {/* <Photo /> */}
      {/* <ClickMe /> */}
      {/* <Counter /> */}
      {/* <ColorBox />
      <LoginForm /> */}
      {/* <PaintDot /> */}
      {/* <Game /> */}
      {/* <UserDetails /> */}
      {/* <NotFound /> */}

    </>
  )
}

export default App
