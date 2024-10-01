import CustomAxios from "../functions/CustomAxios"

function RecentTransactionsService(){
    return CustomAxios('get', `/json/recent-transactions.json`, {})
}

export {
    RecentTransactionsService
}