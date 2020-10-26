import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddRecipe from './Components/AddRecipe';
import RecipeCard from './Components/RecipeCard';
import NavBar1 from './Components/NavBar1';

function filterByValue(array, string) {
  return array.filter(o =>
    Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
}

function App(props) {
  const [arrayOfRecipe, setCurrentArray] = React.useState(JSON.parse(localStorage.getItem('recipedata')) || []);
  const filterSearch = (val) => {
    if (val.target.value === '') {
      setCurrentArray(JSON.parse(localStorage.getItem('recipedata')) || []);
    } else {
      const filtered = filterByValue(arrayOfRecipe, val.target.value);
      setCurrentArray(filtered);
    }
  }
  const Home = () => (
    <>
      <div className="container mt-3">
        <div class="row">
          {arrayOfRecipe.length !== 0 ?
            <>
              {arrayOfRecipe.map((i) => (
                <RecipeCard items={i} />
              ))}
            </>
            : <>
              <div className="w-100 alert alert-primary" role="alert">
                No Data
                </div>
            </>
          }
        </div>
      </div>
    </>
  )

  return (
    <div className="App">
      <NavBar1 filterSearchMethod={filterSearch} />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          
          <Route path="/add-recipe" component={AddRecipe} />
          {/* <Route path="/shop" component={Shop} /> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
