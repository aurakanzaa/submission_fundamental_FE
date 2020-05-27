// import meals from './meals.js';

class DataSource {
    static searchMeals(keyword) {
        return fetch (`https://www.themealdb.com/api/json/v1/1/search.php?f=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} not found`)
                }
            })
    }
}
export default DataSource;