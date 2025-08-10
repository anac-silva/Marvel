import { createContext, useContext, useState, useEffect } from "react";

const ComicsContext = createContext();

export function ComicsProvider({ children }) {
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchComics() {
        try {
            setLoading(true);
            setError(null);

            const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";
            const res = await fetch(`${apiUrl}/marvel`);
            const data = await res.json();

            if (!res.ok) {
            throw new Error(data.message || "Erro desconhecido");
            }

            const items = (data?.data?.results ?? []).map((c) => {
            const path = c?.thumbnail?.path?.replace("http:", "https:") || "";
            const ext = c?.thumbnail?.extension || "jpg";
            const thumbnail = path ? `${path}/portrait_uncanny.${ext}` : "";

            const prices = c?.prices ?? [];
            const print = prices.find((p) => p.type === "printPrice" && p.price > 0);
            const digital = prices.find((p) => p.type === "digitalPurchasePrice" && p.price > 0);
            const chosen = print || digital || prices[0];
            const price = chosen?.price ?? 0;

            const characters = c?.characters?.items?.slice(0, 5).map((ch) => ch.name) ?? [];

            return {
                id: c.id,
                title: c.title,
                description: c.description || "Sem descrição disponível.",
                thumbnail,
                price,
                characters,
            };
            });

            setComics(items);
        } catch (e) {
            setError(e.message || "Erro ao buscar HQs");
        } finally {
            setLoading(false);
        }
        }

        fetchComics();
    }, []);

    return (
        <ComicsContext.Provider value={{ comics, loading, error }}>
        {children}
        </ComicsContext.Provider>
    );
}

export function useComics() {
    return useContext(ComicsContext);
}