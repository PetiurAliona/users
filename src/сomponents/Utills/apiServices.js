export async function getUsers() {
  try {
    const baseUrl = "https://dummyapi.io/data/v1/user"
    const response = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "app-id": "615d85b1eb3d1fe948797d59",
      },
    })
    return response.json()
  } catch (error) {
    throw new Error(error)
  }
}

export async function addUser(data) {
  const baseUrl = "https://dummyapi.io/data/v1/user/create"
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "app-id": "615d85b1eb3d1fe948797d59",
    },
    body: JSON.stringify(data),
  })
  console.log(response)
  return response.ok ? await response.json() : Promise.reject(await response.json())
}
