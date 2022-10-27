import connect from "./database.js";
import Restaurant from "../api/models/Restaurant.js";

connect()

// Imprime el _id, nombre, cocina, colonia y restaurant_id de todos
// los restaurantes.
async function run() {
    const restaurants = await Restaurant.find(
        {},
        {_id:1 , name: 1, borough: 1, cuisine: 1, restaurant_id: 1 }
    )
    console.log(restaurants);
}

run()