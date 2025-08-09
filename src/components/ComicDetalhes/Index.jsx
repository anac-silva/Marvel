import { useParams } from "react-router-dom";
import { useComics } from "../../context/ComicsContext";
import { useCart } from "../../context/CartContext";

export default function ComicDetails() {
    const { id } = useParams();
    const { comics } = useComics();
    const { addToCart } = useCart();

    const comic = comics.find(c => c.id === parseInt(id));

    if (!comic) return <p>HQ não encontrada.</p>;

    return (
        <div>
        <h2>{comic.title}</h2>
        <img src={comic.thumbnail} alt={comic.title} width={200} />
        <p>{comic.description}</p>
        <p><strong>Preço:</strong> R$ {comic.price.toFixed(2)}</p>
        <p><strong>Personagens:</strong> {comic.characters.join(", ") || "Não informado"}</p>
        <button onClick={() => addToCart(comic)}>Adicionar ao Carrinho</button>
        </div>
    );
}