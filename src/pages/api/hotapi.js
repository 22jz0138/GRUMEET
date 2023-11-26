
export default async function handler(req, res) {
    const baseUrl = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/";

    // クライアントサイドからのリクエストのクエリパラメータ(req.query)を取得
    const lat = req.query.lat;   // 緯度
    const lng = req.query.lng;   // 経度
    const range = req.query.range;  // 検索範囲
    const start = req.query.start
    try {
        const apiResponse = await fetch(
            `${baseUrl}?key=${process.env.API_KEY}&lat=${lat}&lng=${lng}&range=${range}&start=${start}&count=10&format=json`
        );

        // 外部APIのレスポンスのステータスコードが成功（200番台）でない場合
        if (!apiResponse.ok) {
            throw new Error(`Failed to fetch data from external API. Status: ${apiResponse.status}`);
        }

        const data = await apiResponse.json();

        // 正常な場合、取得したデータをクライアントにJSON形式で返す
        res.status(200).json(data);
    } catch (error) {
        // エラーメッセージをコンソールに出力
        console.error('Error fetching data from external API:', error);

        // エラーレスポンスをクライアントに返す
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
