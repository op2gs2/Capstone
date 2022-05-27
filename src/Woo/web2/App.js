const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors');
const mysql = require('mysql');
const db = mysql.createPool({
    host: 'capstons-db.cuwqixyzmmdw.us-east-1.rds.amazonaws.com',
    user: 'admin',
    port: '3306',
    password: 'capstondb',
    database: 'capstondb'
});
let sqlQuery =
        "SELECT K.MD5, K.SHA, K.name, H.NumberOfSections, H.Machine,\
      O.AddressOfEntryPoint, O.ImageBase, O.FileAlignment, O.SizeOfImage, O.SizeOfHeader,\
      S.SectionName, S.VirtualSize, S.VirtualAddress, S.SizeOfRawData, S.PointerToRawData\
      FROM FileKey AS K \
      JOIN FileHeader AS H ON K.MD5 = H.MD5\
      JOIN OptionalHeader AS O ON O.MD5=K.MD5\
      JOIN SectionHeader AS S ON S.MD5=K.MD5\
      WHERE K.MD5 =";
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('연결 되었습니다.')
});
app.post('/api/setMD5', (req, res) => {
    const md5 = req.body.md;
    sqlQuery=sqlQuery+md5;
    console.log(sqlQuery); 
    res.send('성공')
});
app.get('/api/getData', (req, res) => {
    
    db.query(sqlQuery, (err, data) => {
        if (err) {
            console.log('err');
            res.send(err);
        }
        else {
            console.log('success');
            res.send(data);
        }
    })
});

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}`);
});