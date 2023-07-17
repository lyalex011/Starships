
async function getAllStarships(setData) {
    let api = 'https://swapi.dev/api/starships/?format=json'
    let shipList = await fetch(api)
    let ship = await shipList.json()
    setData(ship.results)
}

export default getAllStarships;