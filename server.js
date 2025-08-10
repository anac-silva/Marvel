import express from "express";
import fetch from "node-fetch";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: "http://localhost:5173", 
}));

app.get("/marvel", async (req, res) => {
    try {
        const publicKey = process.env.MARVEL_PUBLIC_KEY;
        const privateKey = process.env.MARVEL_PRIVATE_KEY;

        const ts = Date.now().toString();
        const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

        const params = new URLSearchParams({
        ts,
        apikey: publicKey,
        hash,
        orderBy: "title",
        limit: "25",
        });

        const response = await fetch(`https://gateway.marvel.com/v1/public/comics?${params.toString()}`);
        const data = await response.json();

        if (!response.ok) {
        return res.status(response.status).json({ message: data.message || "Erro desconhecido" });
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    
});

