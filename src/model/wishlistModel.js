const mongoose = require('mongoose')

const wishlistSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    rentalId:{
        type:mongoose.Schema.ObjectId,
        ref:'Rental'
    }
})


const Wishlist = mongoose.model('Wishlist',wishlistSchema);

module.exports = Wishlist;