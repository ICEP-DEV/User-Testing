const express = require('express')
const router = express.Router()
const connection = require("../config/config");


router.post('/', (req, res) => {
    var sql = `INSERT INTO person(name,surname,email,phoneNo)
    VALUES(?,?, ?, ?);`

    var sql_body_data = [req.body.name, req.body.surname, req.body.email, req.body.phoneNo]

    connection.query(sql, sql_body_data, (err, results)=>{
        if(err) console.log(err)
        else{
            if(results.affecttedRows != 0){
                console.log("Successfully inserted")
                console.log(results)
                res.send({message:"Successfully inserted", success:true, results})
            }
            else{
                console.log("Data was not successfully inserted")
                res.send({message:"Data was not successfully inserted", success:false})

            }
        }
    })
})

router.get('/',(req, res) => {
    connection.query('select * from person', (err, results)=>{
        if(err) console.log(err)
        else{
            if(results.length > 0){
                console.log("Data results")
                console.log(results)
                res.send({message:"Data results", success:true, results})
            }
            else{
                console.log("Data not found")
                res.send({message:"Data not found", success:false})
            }
        }
    })
})

router.get('/:person_id',function(req, res){
    var sql = "select * from person where person_id =?"
    connection.query(sql,req.params.person_id ,function(err, results){
        if(err) console.log(err)
        else{
            if(results.length > 0){
                console.log("Data results")
                console.log(results)
                res.send({message:"Data results", success:true, results})
            }
            else{
                console.log("Data not found")
                res.send({message:"Data not found", success:false})
            }
        }
    })
})

router.put("/:person_id", function(req, res){
    var sql = `update person
                set name=?,
                    surname = ?,
                    email=?,
                    phoneNo=?
                    where person_id=?`
    var sql_body_data = [req.body.name, req.body.surname, req.body.email, req.body.phoneNo, req.params.person_id]

    connection.query(sql, sql_body_data, (err, results)=>{
        if(err) console.log(err)
        else{
            if(results.affecttedRows != 0){
                console.log("Successfully inserted")
                console.log(results)
                res.send({message:"Successfully inserted", success:true, results})
            }
            else{
                console.log("Data was not successfully inserted")
                res.send({message:"Data was not successfully inserted", success:false})

            }
        }
    })
})

router.delete('/:person_id', function(req, res){
    var sql = `delete from person
                where person_id=?`
    connection.query(sql, req.params.person_id,(err, results)=>{
        if(err) console.log(err)
        else{
            if(results.affecttedRows != 0){
                console.log("Successfully inserted")
                console.log(results)
                res.send({message:"Successfully inserted", success:true, results})
            }
            else{
                console.log("Data was not successfully inserted")
                res.send({message:"Data was not successfully inserted", success:false})

            }
        }
    })
})

module.exports = router