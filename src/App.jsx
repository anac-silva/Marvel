import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import ComicPesquisa from "./components/ComicPesquisa";
import ComicList from "./components/ComicList";
import ComicDetalhes from "./pages/ComicDetalhes";
import Carrinho from "./pages/Carrinho";
import Footer from "./components/Footer";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <IntroSection />
                <ComicPesquisa value={query} onChange={setQuery} />
                <ComicList query={query} />
              </>
            }
          />
          <Route path="/comic/:id" element={<ComicDetalhes />} />
          <Route path="/cart" element={<Carrinho />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}