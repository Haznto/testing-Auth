'use strict'
const bcrypt = require('bcrypt')
const useraccount = (sequelize,DataTypes) => sequelize.define('useraccount',{
    username: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

useraccount.Checker = async function (username,password) {
    if(username){
        const isValid = await bcrypt.compare(password,username.password);
    
        if(isValid){
            return username
            
        } else {
            throw new Error('User not Authorized')
        }
    } else {
        throw new Error('User not Found')
    }
    
} 



module.exports = useraccount;