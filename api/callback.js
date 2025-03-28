// api/callback.js
export default async function handler(req, res) {
  const { code } = req.query;
  if (!code) {
    return res.status(400).send("Missing code");
  }

  // 這裡您可以處理 OAuth 交換 Token 的邏輯
  console.log("Twitch 回傳的授權碼:", code);

  res.send("已收到 Twitch OAuth 回傳的 code，您可以在控制台查看");
}

