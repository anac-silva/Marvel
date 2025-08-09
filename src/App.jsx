import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Index.jsx";
import { GlobalStyle } from "./GlobalStyle";
import Introducao from "./components/IntroSection/Index.jsx";
import ComicList from "./components/ComicList/Index.jsx";
import ComicDetails from "./components/ComicDetalhes/Index.jsx";
import Carrinho from "./components/Carrinho/Index.jsx";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<><Introducao /><ComicList /></>} />
        <Route path="/comic/:id" element={<ComicDetails />} />
        <Route path="/cart" element={<Carrinho />} />
      </Routes>
    </>
  );
}