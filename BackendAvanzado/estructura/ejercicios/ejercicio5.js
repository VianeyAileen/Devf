import connect from "./database.js";
import Restaurant from "../api/models/Restaurant.js";

connect()

// Imprime restaurantes que hayan tenido una calififcación mayor o igual a 90
async function run() {
    const restaurants = await Restaurant.find({
        'grades.score': {
            $gte: 90
        }
    })
    console.log(restaurants);
}

run()