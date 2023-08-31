import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CreatePage from "./pages/CreatePage/CreatePage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import { Route, Routes } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "./redux/slices/recipesSlice";
import { getFromLocalStorage } from "./redux/slices/favoritesSlice";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";


function App() {

  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      await dispatch(getRecipes())
      await dispatch(getFromLocalStorage())
    } 
    catch (error) {
      setError(error)
    }
  }, [dispatch])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        {error ? <ErrorMessage error={error.message} />
          :(
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        )}
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;

