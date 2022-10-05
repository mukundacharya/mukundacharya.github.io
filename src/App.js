import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <div className="indexStyle">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
