import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import CreateUser from './models/CreateUser';
import './App.css';
import AllUsers from './models/AllUsers';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={< CreateUser />} />
        <Route path='/SeeAllUsers' element={< AllUsers />} />
    </Routes>
    </>
  );
}

export default App;
