const express = require("express");
const router = express.Router();
const cors = require('cors');
const mysql = require('mysql')
router.use(cors());


emailjs.send('<YOUR SERVICE ID>','<YOUR TEMPLATE ID>', '<YOUR PARAMS>', '<user_RY69VNF68jekmUviH3tWd>')
    .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
    console.log('FAILED...', err);
});

module.exports = router

