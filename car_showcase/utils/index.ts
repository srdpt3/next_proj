const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bc1ad6fdb5mshe40c48354e76c69p1f068ajsn6bf06ca92bf0',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}


export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'bc1ad6fdb5mshe40c48354e76c69p1f068ajsn6bf06ca92bf0',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

}