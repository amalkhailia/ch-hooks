import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AddMovie from "./Components/AddMovie/AddMovie";



function App() {
  
  return (
    <div>
      <NavBar />
      <MovieList />
      <AddMovie/>
      <Footer/>
          </div>
  );
  
}

export default App;
