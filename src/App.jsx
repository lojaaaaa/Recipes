import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CreatePage from "./pages/CreatePage/CreatePage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "./redux/slices/recipesSlice";
import { getFromLocalStorage } from "./redux/slices/favoritesSlice";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getFromLocalStorage())
  }, [dispatch]);


  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/recipes" element={<RecipesPage />}/>
          <Route path="/create" element={<CreatePage />}/>
          <Route path="/favorites" element={<FavoritesPage />}/>
        </Routes>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}


export default App;
