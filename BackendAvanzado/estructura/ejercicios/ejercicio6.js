import connect from "./database.js";
import Restaurant from "../api/models/Restaurant.js";

connect()

// Imprime restaurantes que no sean de cocina Americana y que tengan calificación mayor a 70
async function run() {
    const restaurants = await Restaurant.find({
        cuisine: {
            $ne: 'American '
        },
        'grades.score': {
            $gt: 70
        }
    })
    console.log(restaurants);
}

run()