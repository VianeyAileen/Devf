import mongoose from 'mongoose';
import dotenv from 'dotenv';

import User from './api/models/User.js'
import Book from './api/models/Book.js'

dotenv.config()

mongoose.connect(process.env.DB_URI, () => {
        console.log('Conexión a base de datos satisfactoria 🤩');
    }
)

//mongoose.connect(DB_URI, async () => {
//    console.log('Conexión a base de datos satisfactoria 💚')

    /**
     * CRUD User básico con mongoose
     */
    
    /**const user = await User.create({
        name: 'Juan',
        lastname: 'Rodriguez',
        birthday: new Date(),
        address: 'Dirección prueba',
        role: 'Client',
        phone: '17232163',
        contacts: ['Pedrito', 'Jorge'],
        email: 'correo@prueba.com',
        password: '123'
    })
    console.log(user)
    
    const users = await User.find({
        name: 'Juan'
    })
    console.log(users);
    
    const promiseResult = await User.updateMany(
        {
            name: 'Juan',
            lastname: 'Rodriguez'
        },
        {
            role: 'Admin'
        }
    )
    console.log(promiseResult);
    
    const deleteUser = await User.deleteOne({
        name: 'Juan'
    })
    console.log(deleteUser);*/

    /**
     * CRUD BOOK
     */

    /**
    * 1.- Crear modelo book
    * 2.- create de modelo book
    * 3.- find de Book
    * 4.- Update Book by id
    * 5.- Delete by id
    */

    /**const book = await Book.create({
        title: 'El Principito',
        editorial: 'Lexus Editores Infantil',
        edition: 2021,
        pageNumber: 67,
        isbn: '9789962048961'
    })
    console.log(book);

    const books = await Book.find()
    console.log(books);

    const updateBook = await Book.findByIdAndUpdate(
        _valorDelid,
        {
            title: 'El Principe'
        }
    )
    console.log(updateBook);

    const deleteBook = await Book.findByIdAndDelete(
        id,
        {
            title: 'El Principito'
        }
    )*/
//})

