const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors');
const mysql = require('mysql');
const db = mysql.createPool({
    host : 'capstons-db.cuwqixyzmmdw.us-east-1.rds.amazonaws.com',
    user : 'admin',
    port : '3306',
    password : 'capstondb',
    database : 'capstondb'
});
app.use(cors());
app.get('/', (req, res) => {
    res.send('연결 되었습니다.')
});

app.get('/api/get', (req, res) => {
    const sqlQuery = "SELECT * FROM FileHeader;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
});

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
});