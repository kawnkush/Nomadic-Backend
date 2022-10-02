const express = require('express');
const authController = require('./../../controllers/authController');
const payController = require('./../../controllers/paymentController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/googlelogin', authController.googlelogin);

router.post('/forgotpassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.patch('/updatePassword', authController.userAuthorization, authController.updatePassword);


//added for razorpay
router.post('/payment',payController.payment);
module.exports = router;
