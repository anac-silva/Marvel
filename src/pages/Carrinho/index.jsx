import { useCart } from "../../context/CartContext";
import { CartSection, 
    CartTitle, 
    CartList, 
    CartItemTitle, 
    CartDetails, 
    CartRemoveButton, 
    CartButton, 
    CartSummary,
    CartSummaryTitle,
    CartSummaryButton} from "./styles";

export default function Carrinho() {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    if (!cart.length) return <p style={{ textAlign: "center", margin: "60px 0" }}>Seu carrinho está vazio.</p>;

    return (
        <CartSection>
            <CartTitle>Carrinho</CartTitle>
            {cart.map(item => (
                <CartList key={item.id}>
                    <div>
                        <img src={item.thumbnail} alt={item.title} width={90} />
                    </div>
                    <CartDetails>
                        <CartItemTitle> {item.title}</CartItemTitle>
                        <div>
                            <p>R$ {item.price.toFixed(2)} </p>
                            <p>{item.qty} un</p>
                        </div>
                    </CartDetails>
                    <CartButton>
                        <CartRemoveButton onClick={() => removeFromCart(item.id)}>Remover</CartRemoveButton>
                    </CartButton>
                    
                </CartList>
            ))}
            <CartSummary>
                <CartSummaryTitle>Total: R$ {total.toFixed(2)}</CartSummaryTitle>
                <CartSummaryButton onClick={clearCart}>Finalizar Pedido</CartSummaryButton>
            </CartSummary>
            
        </CartSection>
    );
}