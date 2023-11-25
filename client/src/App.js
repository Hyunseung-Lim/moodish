import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { MainPage } from './Pages/MainPage';
import { IngredientPage } from './Pages/IngredientPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/ingredient' element={<IngredientPage/>}/>
          </Routes>          
      </div>
    </Router>
  );
}

export default App;
