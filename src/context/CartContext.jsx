import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        try {
        const raw = localStorage.getItem("cart");
        return raw ? JSON.parse(raw) : [];
        } catch {
        return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(comic) {
        setCart((prev) => {
        const exists = prev.find((item) => item.id === comic.id);
        if (exists) {
            return prev.map((item) =>
            item.id === comic.id ? { ...item, qty: item.qty + 1 } : item
            );
        }
        return [...prev, { ...comic, qty: 1 }];
        });
    }

    function removeFromCart(id) {
        setCart((prev) => {
        const item = prev.find((i) => i.id === id);
        if (!item) return prev;
        if (item.qty > 1) {
            return prev.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i));
        }
        return prev.filter((i) => i.id !== id);
        });
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, clearCart }}
        >
        {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}