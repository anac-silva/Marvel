import { useParams } from "react-router-dom";
import { useComics } from "../../Context/ComicsContext";
import { useCart } from "../../Context/CartContext";
import { 
    ComicDetailsSection,
    DetailsTitle,
    DetailsImage,
    DetailsDescription,
    DetailsButton,
    Separator } from "./styles";

export default function ComicDetails() {
    const { id } = useParams();
    const { comics } = useComics();
    const { addToCart } = useCart();

    const comic = comics.find(c => c.id === parseInt(id));

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
                        <strong>Personagens:</strong> {comic.characters.join(", ") || "Não informado"}
                    </p>
                </DetailsDescription>
            </Separator>
            
            
            <DetailsButton onClick={() => addToCart(comic)}>Adicionar ao Carrinho</DetailsButton>
        </ComicDetailsSection>
    );}