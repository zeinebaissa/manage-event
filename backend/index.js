const express = require('express');
const bodyparser = require('body-parser'); 
const cors = require('cors');

const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(bodyparser.json());

//database connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'club'
});


//check database connection
db.connect((err) => {
    if(err){
        console.log(err,'db error');
    }else{
        console.log('database Connected...');
    }
});

//member
//get all data
app.get('/user', (req, res) => {
    let qr = 'SELECT * FROM user';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'error in query');
        }
        if (result && result.length > 0) {
            res.send({
                message: 'all member data',
                data: result
            });
        }
    });
});


//get single data
app.get('/user/:id', (req, res) => {
    let gID = req.params.id;
    let qr = `SELECT * FROM user WHERE id=${gID}`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'error in query');
        }
        if (result && result.length > 0) {
            res.send({
                message: 'member data',
                data: result
            });
        } else {
            res.send({
                message: 'member data not found',
            });
        }
    });
    
});

//create data

app.post('/user', (req, res) => {
    console.log(req.body,'create data');
    let name = req.body.fullname;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let qr = `INSERT INTO user (fullname, email, mobile) VALUES ('${name}', '${email}', '${mobile}')`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'error in query');
        }
        console.log(result, 'result');
        res.send({
            message: 'member data created',
        });
    });
});

//update data

app.put('/user/:id', (req, res) => {
    console.log(req.body,'update data');
    let gID = req.params.id;
    let name = req.body.fullname;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let qr = `UPDATE user SET fullname='${name}', email='${email}', mobile='${mobile}' WHERE id=${gID}`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'error in query');
        }
        console.log(result, 'result');
        res.send({
            message: 'member data updated',
        });
    });

});

//delete single data

app.delete('/user/:id', (req, res) => {
    let gID = req.params.id;
    let qr = `DELETE FROM user WHERE id=${gID}`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'error in query');
        }
        res.send({
            message: 'event data deleted',
        });
    });
});

//event
//get all data
app.get('/event', (req, res) => {
    let qr = 'SELECT * FROM event';
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'error in query');
        }
        if (result && result.length > 0) {
            res.send({
                message: 'all event data',
                data: result
            });
        }
    });
});


//get single data
app.get('/event/:id_event', (req, res) => {
    let gID = req.params.id_event;
    let qr = `SELECT * FROM event WHERE id_event=${gID}`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'error in query');
        }
        if (result && result.length > 0) {
            res.send({
                message: 'event data',
                data: result
            });
        } else {
            res.send({
                message: 'event data not found',
            });
        }
    });
    
});

//create data

app.post('/event', (req, res) => {
    console.log(req.body,'create data');
    let subject = req.body.subject;
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let room = req.body.room;
    let qr = `INSERT INTO event (subject, start_date, end_date, room) VALUES ('${subject}', '${start_date}', '${end_date}', '${room}')`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'error in query');
        }
        console.log(result, 'result');
        res.send({
            message: 'event data created',
        });
    });
});

//update data

app.put('/event/:id_event', (req, res) => {
    console.log(req.body,'update data');
    let gID = req.params.id_event;
    let subject = req.body.subject;
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let room = req.body.room;
    let qr = `UPDATE event SET subject='${subject}', start_date='${start_date}', end_date='${end_date}', room='${room}' WHERE id_event=${gID}`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'error in query');
        }
        console.log(result, 'result');
        res.send({
            message: 'event data updated',
        });
    });

});

//delete single data

app.delete('/event/:id_event', (req, res) => {
    let gID = req.params.id_event;
    let qr = `DELETE FROM event WHERE id_event=${gID}`;
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'error in query');
        }
        res.send({
            message: 'event data deleted',
        });
    });
});


app.listen(3000, () =>{
        console.log('Server started at port : 3000');
});

