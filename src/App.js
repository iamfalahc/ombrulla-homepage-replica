import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Product from "./pages/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" Component={Home} />
          </Route>
          <Route>
            <Route path="/services" Component={Services} />
          </Route>
          <Route>
            <Route path="/about" Component={About} />
          </Route>
          <Route>
            <Route path="/contact" Component={Contact} />
          </Route>
          <Route>
            <Route path="/blog" Component={Blog} />
          </Route>
          <Route>
            <Route path="/services" Component={Services} />
          </Route>
          <Route>
            <Route path="/product" Component={Product} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
