import connect from "./database.js";
import Restaurant from "../api/models/Restaurant.js";

connect()

// Imprime de restaurantes su _id, nombre, cuya ciudad es Bronxor Brooklyn o de Staten Island 
async function run() {
    const restaurants = await Restaurant.find(
        {
            $or: [
                {borough: 'Bronxor Brooklyn'},
                {borough: 'Staten Island' }
            ],
        },
        {
            name:1,
            borough:1
        }
    )
    console.log(restaurants);
}

run()