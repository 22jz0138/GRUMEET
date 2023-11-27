export default async function handler(req, res) {
    const baseUrl = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
    const id = req.query.id;   // 店のID
 
    try {
        // サーバーサイドでグルメサーチAPIにリクエストを送信
        const apiResponse = await fetch(
            `${baseUrl}?key=${process.env.API_KEY}&id=${id}&format=json`
        );

        // 外部APIのレスポンスのステータスコードが成功（200番台）でない場合エラーメッセージをコンソールに出力
        if (!apiResponse.ok) {
         
            throw new Error(`Failed to fetch data from external API. Status: ${apiResponse.status}`);
        }
        const data = await apiResponse.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
