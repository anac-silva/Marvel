const crypto = require("crypto");

module.exports = async (req, res) => {
    const { path = "comics", ...query } = req.query;
    const ts = Date.now().toString();
    const publicKey = process.env.MARVEL_PUBLIC_KEY;
    const privateKey = process.env.MARVEL_PRIVATE_KEY;

    const hash = crypto.createHash("md5").update(ts + privateKey + publicKey).digest("hex");

    const params = new URLSearchParams({ ts, apikey: publicKey, hash, ...query });
    const url = `https://gateway.marvel.com/v1/public/${path}?${params}`;

    try {
        const r = await fetch(url);
        const data = await r.json();
        res.status(r.status).json(data);
    } catch (e) {
        res.status(500).json({ error: "proxy-failed", message: e.message });
    }
};