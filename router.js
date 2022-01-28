const express = require("express");
const { send } = require("express/lib/response");
const router = express.Router();

const con = require('./database/db');



router.get('/', (req, res)=>{
   con.query('select * from users', (error, results)=>{
       if (error){
            throw (error);
       }else{
            res.send(results);
       }
   });
})

module.exports = router;


