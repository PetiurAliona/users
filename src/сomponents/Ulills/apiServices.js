const BASE_URL = "https://dummyapi.io/data/v1/"
const API_KEY = "615d85b1eb3d1fe948797d59"

async function getUsers(url = "https://dummyapi.io/data/v1/", data = {}) {
  const response = await fetch(url, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
      "app-id": "615d85b1eb3d1fe948797d59",
    },
    body: JSON.stringify(data),
  })
  return await response.json()
}
