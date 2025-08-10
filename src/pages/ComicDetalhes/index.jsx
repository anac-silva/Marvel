import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useComics } from "../../context/ComicsContext";
import { useCart } from "../../context/CartContext";
import {
    ComicDetailsSection,
    DetailsTitle,
    DetailsImage,
    DetailsDescription,
    DetailsButton,
    Separator,
    } from "./styles";

    export default function ComicDetails() {
    const { id } = useParams();
    const { comics } = useComics();
    const { addToCart } = useCart();

    const [comic, setComic] = useState(() =>
        comics.find((c) => c.id === parseInt(id, 10)) || null
    );
    const [loading, setLoading] = useState(!comic);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (comic) return;

        let alive = true;
        (async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch(`/api/marvel?path=comics/${id}`);
            if (!res.ok) throw new Error(`Marvel ${res.status}`);
            const json = await res.json();

            const c = json?.data?.results?.[0];
            if (!c) throw new Error("HQ não encontrada.");


            const thumb =
            `${(c.thumbnail?.path || "").replace("http:", "https:")}.${c.thumbnail?.extension || "jpg"}`;

            const price = Number(
            (c.prices?.find((p) => p.type === "printPrice")?.price ??
            c.prices?.[0]?.price) ?? 0
            );

            const characters = (c.characters?.items || []).map((i) => i.name);

            const normalized = {
            id: c.id,
            title: c.title,
            thumbnail: thumb,
            description: c.description || "Sem descrição.",
            price,
            characters,
            };

            if (alive) setComic(normalized);
        } catch (e) {
            if (alive) setError(e.message || "Erro ao carregar HQ.");
        } finally {
            if (alive) setLoading(false);
        }
        })();

        return () => {
        alive = false;
        };
    }, [id, comic]);

    if (loading) return <p>Carregando…</p>;
    if (error) return <p>Erro: {error}</p>;
    if (!comic) return <p>HQ não encontrada.</p>;

    return (
        <ComicDetailsSection>
        <DetailsTitle>{comic.title}</DetailsTitle>
        <Separator>
            <DetailsImage src={comic.thumbnail} alt={comic.title} width={200} />
            <DetailsDescription>
            <p><strong>Descrição:</strong> {comic.description}</p>
            <p style={{ padding: "10px 0" }}>
                <strong>Preço:</strong> R$ {comic.price.toFixed(2)}
            </p>
            <p style={{ padding: "10px 0" }}>
                <strong>Personagens:</strong>{" "}
                {comic.characters?.join(", ") || "Não informado"}
            </p>
            </DetailsDescription>
        </Separator>

        <DetailsButton onClick={() => addToCart(comic)}>Adicionar ao Carrinho</DetailsButton>
        </ComicDetailsSection>
    );
}