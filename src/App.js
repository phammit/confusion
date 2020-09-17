import React, { Component, useState } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes.js';

function App() {
//course uses class component to deal with state.  can use funtion component and state with hooks
//useState is a hook that lets you use state in a function component
// const[] is called "array destructuring"
const[dishes, setDishes] = useState(DISHES);

  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorant Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes}/>
    </div>
  );
}

export default App;
