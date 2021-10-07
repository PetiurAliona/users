export async function getUsers(url = "https://dummyapi.io/data/v1/user") {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "app-id": "615d85b1eb3d1fe948797d59",
    },
  })
  console.log(response)
  return response.json()
}

export async function addUser(url = "https://dummyapi.io/data/v1/user/create") {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "app-id": "615d85b1eb3d1fe948797d59",
    },
  })
  return response.json()
}

getUsers().then(console.log)
