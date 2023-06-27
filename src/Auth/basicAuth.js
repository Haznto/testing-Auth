'use strict'
const {useraccount} = require('../models/index')
const userChecker = require('../models/user.model')
const bcrypt = require('bcrypt')
const base64 = require('base-64')
module.exports = async (req, res, next) => {
    if (req.headers.authorization ){

        let EncCredentials = req.headers.authorization.split(" ").pop();
        const [username,password] = base64.decode(EncCredentials).split(":")
        console.log(username,password)
        let user = await useraccount.findOne({where:{username}});
        console.log(user.username,55555)
        
        userChecker.Checker(user,password).then(data => {
            console.log(data.username,33333333333333)
            req.user = data;
            console.log(req.user.username)
            next()
        }).catch(err => next(err))
       
        
    } else {
        next('please enter a username and a password')
    }
}