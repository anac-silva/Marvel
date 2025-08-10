import CryptoJS from "crypto-js";

export default async function handler(req, res) {
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

  try {
    const response = await fetch(`https://gateway.marvel.com/v1/public/comics?${params.toString()}`);


    const text = await response.text();

    let data;
    try {

      data = JSON.parse(text);
    } catch {
      
      return res.status(500).json({ message: "Resposta inválida da API Marvel", raw: text });
    }

    if (!response.ok) {
      return res.status(response.status).json({ message: data.message || "Erro desconhecido" });
    }

    // Tudo certo, retornamos os dados JSON
    res.status(200).json(data);
  } catch (error) {
    // Erro no fetch ou outro erro inesperado
    res.status(500).json({ message: error.message || "Erro interno no servidor" });
  }
}