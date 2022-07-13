import { REACT_APP_API_KEY2, REACT_APP_API_KEY } from "@env"
console.log(REACT_APP_API_KEY);
console.log(REACT_APP_API_KEY2);
export const getWeather = async (city, units) => {

    if (!city) {
        city = "paris"
    }

    if (!units) {
        units = "metric"
    }

    const fetchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${REACT_APP_API_KEY}&lang=fr&units=${units}`

    return (
        fetch(fetchUrl)
            .then((res) => res.json())
    )
}