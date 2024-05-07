import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Item from './RecipeItem/RecipeItem';
import CreateItemComponent from './components/AddItem/CreateRecipeComponent';
import UpdateItemComponent from './components/UpdateRecipeComponent';
import SearchItemComponent from './components/SearchComponent/SearchRecipeComponent';
import ItemDetailsComponent from './components/RecipeDetails/RecipeDetailsComponent';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Item />} />
              <Route path='/items' element={<Item />} />
              <Route path='/add-items' element={<CreateItemComponent />} />
              <Route path='/update-items/:id' element={<UpdateItemComponent />} />
              <Route path='/search-item' element={<SearchItemComponent />} />
              <Route path="/item-details/:name" element={<ItemDetailsComponent/>} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
