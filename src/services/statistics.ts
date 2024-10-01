import CustomAxios from "../functions/CustomAxios"

function statisticsService(){
    return CustomAxios('get', `json/statistics.json`, {})
}

export {
    statisticsService
}