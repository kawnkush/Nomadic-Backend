const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Wishlist = require('./../model/wishlistModel')

exports.getAllWishlist = catchAsync (async (req,res,next)=>{
    const allWishlist = await Wishlist.find({userId:req.params.id})

    if(!allWishlist){return new AppError('No wishlist found', 400)}

    res.status(200).json({
        status: 'success',
    data: {
        allWishlist
    },
    })
})

exports.addToWishlist = catchAsync (async (req,res,next)=>{
    const wishlist = await Wishlist.create({
        userId: req.body.userId,
        rentalId: req.body.rentalId,
    })

    if(!wishlist){return new AppError('Error creating a wishlist', 400)}

    res.status(201).json({
        status: 'success',
    data: {
        wishlist
    },
    })
})

exports.deleteFromWishlist = catchAsync (async (req,res,next)=>{
    const wishlist = await Wishlist.findByIdAndDelete({_id:req.params.id})

    if(!wishlist){return new AppError('Something went wrong trouble removing the wishlist', 400)}

    res.status(204).json({
        status: 'success',
    data: {
        wishlist
    },
    })
})