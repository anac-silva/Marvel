import { useCart } from "../../context/CartContext";

export default function Carrinho() {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    if (!cart.length) return <p>Seu carrinho está vazio.</p>;

    return (
        <div>
        <h2>Carrinho</h2>
        {cart.map(item => (
            <div key={item.id}>
            <img src={item.thumbnail} alt={item.title} width={100} />
            <h3>{item.title}</h3>
            <p>R$ {item.price.toFixed(2)} x {item.qty}</p>
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </div>
        ))}
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <button onClick={clearCart}>Finalizar Pedido</button>
        </div>
    );
}