import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Favorite from "./pages/favorite";
import { Movieprovider } from "./contexts/MovieContexts";
import NavBar from "./components/NavBar";
function App() {
  const movieNumber = 2;
  return (
    <Movieprovider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </Movieprovider>
  );
}

export default App;
