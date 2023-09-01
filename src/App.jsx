import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CreatePage from "./pages/CreatePage/CreatePage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import { Route, Routes } from "react-router-dom";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import useFetchData from "./hooks/useFetchData";


function App() {

  const error = useFetchData()

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        { error ? <ErrorMessage error={error.message} />
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

