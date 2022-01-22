
import './App.css';
import Home from './Component/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Works from './Component/works';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/works" element={<Works />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/news-letter" element={<Home />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
