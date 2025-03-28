// api/callback.js
export default async function handler(req, res) {
  const { code } = req.query;
  if (!code) {
    return res.status(400).send("缺少授權碼");
  }

  // 在此處理 Twitch OAuth 流程，例如交換授權碼以獲取訪問權杖
  console.log("收到的授權碼:", code);

  res.send("已成功接收授權碼，請檢查伺服器日誌以獲取詳細資訊。");
}
