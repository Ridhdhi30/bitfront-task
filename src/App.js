import { useState } from 'react';
import React from 'react';
import  Breadcrumb from "./Components/Breadcrumb"
import Header from "./Components/Header"
import './App.css';
import UserList from './pages/UserList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserAlbum from './pages/userAlbum';
import AlbumsList from "./pages/Photos/"


function App() {

  const [crumbs, setCrumb] = useState(['Home', 'Category','sub Category'])

  const selected = crumb =>{
    console.log(crumb)
  }

   return (
    <>
    <BrowserRouter>
      <div className="App container" style={{ backgroundImage: "url(./circle.jpg)" }}>
        <Header />
        <Breadcrumb/>
        <Routes>
        <Route path='/' element={<UserList/>}></Route>
              <Route path='/albums/:userId' element={<UserAlbum/>}></Route>
              <Route path='/photos/:userId/:albumId' element={<AlbumsList/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
      )
   }
   export default App;