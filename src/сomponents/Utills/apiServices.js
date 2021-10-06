const BASE_URL = "https://dummyapi.io/data/v1/"
const API_KEY = "615d85b1eb3d1fe948797d59"

async function getUsers() {
  const response = await fetch(url = "https://dummyapi.io/data/v1/user", {
   
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "app-id": "615d85b1eb3d1fe948797d59",
    },
   
  })  
  console.log(response)
  return  response.json()
}

async function addUser() {
  const response = await fetch(url = "https://dummyapi.io/data/v1/user/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "app-id": "615d85b1eb3d1fe948797d59",
    },
   
  })
  return  response.json()
}

getUsers().then(console.log)
console.log('fewf')