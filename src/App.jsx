import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <HomePage />
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
