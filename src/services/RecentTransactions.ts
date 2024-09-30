import CustomAxios from "../functions/CustomAxios"

function RecentTransactionsService(){
    return CustomAxios('get', `${import.meta.env.VITE_URL_API}/recent-transactions`, {})
}

export {
    RecentTransactionsService
}