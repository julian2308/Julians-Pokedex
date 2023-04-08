import BlogList from "./components/BlogList";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./styles/App.css"

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" Component={Home}>
        </Route>
        <Route path="/movies" Component={BlogList}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
