import FunctionComponent from "./components/FunctionComponent";
import Gallery, { Profile } from "./components/Gallery";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Tab from "./components/Tab";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Box from "./components/Box";
import PropExample from "./components/PropExample";
import { items } from "./components/Item";
import Avatar from "./components/Avatar";
import EffectDemo from "./components/EffectDemo";
import EffectIntervalExample from "./components/EffectIntervalExample";
import RefExample from "./components/RefExample";
import RefCounter from "./components/RefCounter";
import ContextExample from "./components/ContextExample";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Blog from './components/Blog'

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
