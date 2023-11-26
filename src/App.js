import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { StartPage } from './Pages/StartPage';
import { IngredientPage } from './Pages/IngredientPage';
import { MixPage } from './Pages/MixPage';
import { CookStartPage } from './Pages/CookStartPage';
import { MaindishPage } from './Pages/MaindishPage';
import { SubdishPage } from './Pages/SubdishPage';
import { CookFinishPage } from './Pages/CookFinishPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<StartPage/>} />
            <Route path='/ingredient' element={<IngredientPage/>}/>
            <Route path='/mix' element={<MixPage/>}/>
            <Route path='/cookstart' element={<CookStartPage/>}/>
            <Route path='/maindish' element={<MaindishPage/>}/>
            <Route path='/subdish' element={<SubdishPage/>}/>
            <Route path='/cookfinish' element={<CookFinishPage/>}/>
          </Routes>          
      </div>
    </Router>
  );
}

export default App;
