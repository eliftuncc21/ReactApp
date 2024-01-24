import React from 'react';
import Navbar from "./components/Navbar";
import Users from './components/Users';
import AddUser from "./components/AddUser";
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Navbar title='User App' />
      <hr />
      <AddUser />
      <Users />
    </div>
  );
}

export default App;
