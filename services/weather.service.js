const key = "";
const base = "http://api.openweathermap.org/data/2.5";
const units = "metric";

export async function searchInfoByLocation(location) {
    return await fetch(`${base}/weather?q=${location}&units=${units}&appid=${key}`)
    .then(desterializeData)
    .catch(showError);
}

function desterializeData(x) {
    return x.json();
}

function showError(err) {
    console.log(err);
}