import Styles from "@/components/creditmark/Creditmark"

//https://webservice.recruit.co.jp/doc/hotpepper/guideline.html
//上記リファレンスによる必須内容

function Creditmark (){
    return(
        <div className={Styles.Creditmark}>
            <a href="http://webservice.recruit.co.jp/"><img src="http://webservice.recruit.co.jp/banner/hotpepper-s.gif" alt="ホットペッパーグルメ Webサービス" width="135" height="17" border="0" title="ホットペッパーグルメ Webサービス"/></a>
        </div>
    )
}

export default Creditmark;