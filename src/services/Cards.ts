import CustomAxios from "../functions/CustomAxios"
function CardService(){
    return CustomAxios('get', `/json/credit-card.json`, {})
}
export {
    CardService
}