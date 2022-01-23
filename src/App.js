
import './App.css';
import Home from './Component/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Works from './Component/works';
import About from "./Component/about";
import Blog from "./Component/blog"
import News from "./Component/News"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
