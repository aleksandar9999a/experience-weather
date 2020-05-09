const key = "";
const base = "http://api.openweathermap.org/data/2.5";
const units = "metric";

export async function searchInfoByLocation(location) {
    return await baseFetch(`${base}/weather?q=${location}&units=${units}&appid=${key}`);
}

export async function searchInfoByCurrLocation(lat, lon) {
    return await baseFetch(`${base}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`);
}

async function baseFetch(url) {
    return await fetch(url).then(desterializeData).catch(showError);
}

function desterializeData(x) {
    return x.json();
}

function showError(err) {
    console.log(err);
}