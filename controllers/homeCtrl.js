var express = require('express');
var router = express.Router();
var request = require('request');
var http = require('http');
var mailUtils = require('./../routes/utils/mail-utils')

module.exports = {
    showHome: (req, res, next) => {
        res.render('index', {
        });
    },

    enquiryMail: (req, res, next) => {
        var name = req.body.name
        var email = req.body.emailId
        var mobile = req.body.phone
        var message = "\n Name : " + name + "\nMobile Number : " + mobile + "\n Email-Id : " + email + "\n Message : "+req.body.msg 
        mailUtils.sendMail('teamletscipher@gmail.com', "Enquiry Mail", message)
        res.render('index', {
        });
    }
}