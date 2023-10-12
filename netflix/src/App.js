import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowMovie from './components/ShowMovie';
import AddMovie from './components/AddMovie';
import NavBarMenu from './components/NavBarMenu';
import MovieDetail from './components/MovieDetail';
import UpdateMovie from './components/UpdateMovie';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu />
        <Routes>
          <Route path="/" element={<ShowMovie />}> </Route>
          <Route path="/addMovie" element={<AddMovie />}> </Route>
          <Route path="/:id/" element={<MovieDetail />}> </Route>
          <Route path="/:id/update" element={<UpdateMovie />}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;