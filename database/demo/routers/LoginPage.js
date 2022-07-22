const express = require('express');
const Loginrouter = express.Router();
const mysql = require('mysql');
const bcrypt=require('bcrypt');

// creatpool is used for application grade connectivity in mysql
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database:"amazondb"
})
// make routes of router;
// making a post to database while taking inputs from frontend.
Loginrouter.post('/user', async(req, res) => {
    const name=req.body.name;
    const number=req.body.number;
    const email = req.body.email;
    const password = req.body.password;

    //to encrypt the password
    const encryptPassword=await bcrypt.hash(password,10)

    // callback og getconnection is type of promise return type of callback.
    db.getConnection(async(err, connection) => {
        if (err) throw (err);

        // whenever this is called , we will search in database;
        // ? = this is placeholder
        const sqlSearch = "SELECT*FROM signupdata WHERE email=?"
        const search_query = mysql.format(sqlSearch, [email]);
        // whenever this is called we want to insert something to database;

        const sqlInsert = "INSERT INTO signupdata(name,number,email,password) VALUES(?,?,?,?)";
        const insert_query = mysql.format(sqlInsert, [name,number,email,encryptPassword]);

        // now asking the connection for sql database for the given email;
        await connection.query(search_query, async(err, result) => {
            if (err) throw (err);
            console.log("------>searching for result");
            console.log(result.length)
            if (result.length != 0) {
                // releasing the connection with database;
                connection.release();
                console.log("email already exists")
                res.json({
                    message:"email already exists"
                })
            } else {
                await connection.query(insert_query, (err, result) => {
                    if (err) throw (err);
                    console.log("data inserted");
                    res.json({
                        message: "data inserted successfully",
                        result:result
                    })
                    connection.release()
                })
            }
           
        })
        
    })
    
})


// export the router and import in your main file => index.js

module.exports = Loginrouter;