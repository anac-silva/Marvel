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

            const ts = Date.now().toString();
            const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
            const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

            const { default: md5 } = await import("md5");
            const hash = md5(ts + privateKey + publicKey);

            const params = new URLSearchParams({
            ts,
            apikey: publicKey,
            hash,
            orderBy: "title",
            limit: "20",
            });

            const res = await fetch(
            `https://gateway.marvel.com/v1/public/comics?${params.toString()}`
            );
            if (!res.ok) throw new Error(`Marvel ${res.status}`);

            const json = await res.json();

            const items = (json?.data?.results ?? []).map((c) => {
            const path = c?.thumbnail?.path?.replace("http:", "https:") || "";
            const ext = c?.thumbnail?.extension || "jpg";
            const thumbnail = path ? `${path}/portrait_uncanny.${ext}` : "";

            const prices = c?.prices ?? [];
            const print = prices.find((p) => p.type === "printPrice" && p.price > 0);
            const digital = prices.find(
                (p) => p.type === "digitalPurchasePrice" && p.price > 0
            );
            const chosen = print || digital || prices[0];
            const price = chosen?.price ?? 0;

            const characters =
                c?.characters?.items?.slice(0, 5).map((ch) => ch.name) ?? [];

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
