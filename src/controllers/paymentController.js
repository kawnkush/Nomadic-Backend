const catchAsync = require('./../utils/catchAsync');
const Razorpay = require('razorpay')
const shortid = require('shortid')
const razorpay = new Razorpay({
	key_id: process.env.RAZORPAY_KEY,
	key_secret: process.env.RAZORPAY_SECRET
})


exports.payment = catchAsync(async (req, res, next) => {
   
    const payment_capture = 1
	const amount = 499
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}

});