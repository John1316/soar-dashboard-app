import CustomAxios from "../functions/CustomAxios"

function statisticsService(){
    return CustomAxios('get', `${import.meta.env.VITE_URL_API}/statistics`, {})
}

export {
    statisticsService
}