import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CreatePage from "./pages/CreatePage/CreatePage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "./redux/slices/recipesSlice";

function App() {

  
  const recipes = [
    {
      "id": 1,
      "title":"Улитки по-бургундски",
      "description":"Подается в луковом соусе",
      "ingredients": ["Улитки виноградные", "Масло сливочное", "Лук зеленый"],
      "image": "./img/recipes/1.jpg"
    },
    {
      "id": 2,
      "title":"Улитки по-бургундски",
      "description":"Подается в луковом соусе",
      "ingredients": ["Улитки виноградные", "Масло сливочное", "Лук зеленый"],
      "image": "./img/recipes/1.jpg"
    },
    {
      "id": 3,
      "title":"Улитки по-бургундски",
      "description":"Подается в луковом соусе",
      "ingredients": ["Улитки виноградные", "Масло сливочное", "Лук зеленый"],
      "image": "./img/recipes/1.jpg"
    }
  ]
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);


  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/recipes" element={<RecipesPage />}/>
          <Route path="/create" element={<CreatePage />}/>
        </Routes>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}


export default App;
