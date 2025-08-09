import { useMemo, useEffect } from "react";
import { useComics } from "../../context/ComicsContext";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import {
    ComicListContainer,
    CardComicList,
    CardComicListImage,
    CardComicListTitle,
    CardComicListValor,
    CardComicListTexts,
    CardComicListButtons,
    ButtonComicListAdicionar,
    ButtonComicListDetalhes,
    } from "./styles";

    export default function ComicList({ query = "" }) {
    const { comics, loading, error } = useComics();
    const { addToCart } = useCart();

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return comics;
        return comics.filter((c) => {
        const inTitle = c.title?.toLowerCase().includes(q);
        const inChars = (c.characters || []).some((name) =>
            name.toLowerCase().includes(q)
        );
        return inTitle || inChars;
        });
    }, [comics, query]);

    useEffect(() => {
        const prefersReduced =
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

        const sr = ScrollReveal();
        sr.reveal(".sr-card", {
        origin: "bottom",
        distance: prefersReduced ? "0px" : "24px",
        duration: prefersReduced ? 0 : 600,
        opacity: 0,
        easing: "ease-out",
        scale: 1,
        interval: 80, 
        cleanup: true,
        reset: false,
        viewFactor: 0.1,
        });

        return () => sr.destroy();
    }, [filtered.length]); 

    if (loading) {
        return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <img
            src="/images/loading.gif"
            alt="Carregando..."
            style={{ width: 300 }}
            />
        </div>
        );
    }
    if (error) return <p>Erro: {error}</p>;
    if (!filtered.length) return <p style={{ textAlign: "center", margin: "60px 0" }}>Nenhuma HQ encontrada.</p>;

    return (
        <ComicListContainer>
        {filtered.map((comic) => (
            <CardComicList key={comic.id} className="sr-card">
            <CardComicListImage src={comic.thumbnail} alt={comic.title} />
            <CardComicListTexts>
                <CardComicListTitle>{comic.title}</CardComicListTitle>
                <CardComicListValor>
                R$ {Number(comic.price).toFixed(2)}
                </CardComicListValor>
            </CardComicListTexts>
            <CardComicListButtons>
                <ButtonComicListAdicionar onClick={() => addToCart(comic)}>
                Adicionar
                </ButtonComicListAdicionar>
                <Link to={`/comic/${comic.id}`} style={{ textDecoration: "none" }}>
                <ButtonComicListDetalhes>Ver Detalhes</ButtonComicListDetalhes>
                </Link>
            </CardComicListButtons>
            </CardComicList>
        ))}
        </ComicListContainer>
    );
}