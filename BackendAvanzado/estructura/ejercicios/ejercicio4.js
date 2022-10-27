import connect from "./database.js";
import Restaurant from "../api/models/Restaurant.js";

connect()

// Imprime los siguientes 5 restaurantes cuyo borough es Bronx
async function run() {
    const restaurants = await Restaurant.find({borough: 'Bronx'}).skip(5).limit(5)
    console.log(restaurants);
}

run()