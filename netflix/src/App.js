import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowMovie from './components/ShowMovie';
import AddMovie from './components/AddMovie';
import NavBarMenu from './components/NavBarMenu';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu />
        <Routes>
          <Route path="/" element={<ShowMovie />}> </Route>
          <Route path="/addMovie" element={<AddMovie />}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;