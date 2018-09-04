const BASE_URL = "https://urimroc.byu.edu"
const URL_ENDPOINT = "/fmi/data/v1/databases/Records Operation Center Tables/sessions"
const USERNAME = "RestAdmin"
const PASSWORD = "URIM2019"

const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + USERNAME + ":" + PASSWORD,
}

fetch(`${BASE_URL}${URL_ENDPOINT}`, {
    method: "POST",
    headers: { ...headers },
    credentials: "include",
    body: JSON.stringify({}),
})
    .then(response => response.json())
    .then(json => console.log(json))
