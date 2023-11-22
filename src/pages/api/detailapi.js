// Next.js API ルートのハンドラ関数
export default async function handler(req, res) {
    // Hot Pepper Gourmet API のベースURL
    const baseUrl = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/";

    // クライアントサイドからのリクエストのクエリパラメータ(req.query)を取得
    const id = req.query.id;   // 店のID
 
    try {
        // サーバーサイドでグルメサーチAPIにリクエストを送信
        const apiResponse = await fetch(
            // クエリパラメータを含むURLで外部APIにリクエスト
            `${baseUrl}?key=${process.env.API_KEY}&id=${id}&format=json`
        );

        // 外部APIのレスポンスのステータスコードが成功（200番台）でない場合
        if (!apiResponse.ok) {
            // エラーメッセージをコンソールに出力
            throw new Error(`Failed to fetch data from external API. Status: ${apiResponse.status}`);
        }

        // 外部APIからのレスポンスをJSON形式で取得
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
