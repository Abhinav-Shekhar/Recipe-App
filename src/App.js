import React, { useEffect } from 'react';
import './App.css';

function App() {

  const API_ID = "49338b8c";
  const API_KEY = "e178173bda65a57f940f8f104509f39c";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
