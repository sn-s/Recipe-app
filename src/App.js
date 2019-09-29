import React, {useState, useEffect} from 'react';
import Recipe from "./Recipe";


const App = () => {
  const APP_ID = "d99ef25d";
  const APP_KEY = "401fb9286b9be98467f6f0d4cf8143bc";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

useEffect(() => {
  fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(resp => resp.json())
    .then(data => setRecipes(data.hits));
}, [query]);

const updateSearch = (e) => {
  setSearch(e.target.value);
}

const getSearch = (e) => {
  e.preventDefault();
  setQuery(search);
  setSearch("");
}

let data = recipes.map(recipe => <Recipe 
  key={recipe.recipe.uri}
  name={recipe.recipe.label}
  calories={recipe.recipe.calories}
  ingredients={recipe.recipe.ingredients}
  image={recipe.recipe.image}/> )

return(
  <div className="tc black courier">
   <div>
    <h1>Recipe Database</h1>
      <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch}/>
        <button type="submit">Search</button>
      </form>
    <br/>  
    <h2>{`Meals with ${query}`}</h2>  
   </div>  
    {data}
  </div>
  )
}

export default App;
