import { useComics } from "../../context/ComicsContext";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import {
    ComicListContainer,
    CardComicList,
    CardComicListImage,
    CardComicListTitle,
    CardComicListValor,
    CardComicListTextos,
    ButtonComicListAdicionar,
    CardComicListButtons,
    ButtonComicListDetalhes,
} from "./styles";

export default function ComicList() {
    const { comics, loading, error } = useComics();
    const { addToCart } = useCart();

    if (loading) return <p>Carregando HQs...</p>;
    if (error) return <p>Erro: {error}</p>;
    if (!comics.length) return <p>Nenhuma HQ encontrada.</p>;

    return (
        <ComicListContainer>
        {comics.map((comic) => (
            <CardComicList key={comic.id}>
            <CardComicListImage src={comic.thumbnail} alt={comic.title} />

            <CardComicListTextos>
                <CardComicListTitle>{comic.title}</CardComicListTitle>
                <CardComicListValor>R$ {Number(comic.price).toFixed(2)}</CardComicListValor>
            </CardComicListTextos>

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

