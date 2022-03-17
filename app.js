var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var ejs = require('ejs')
var mysql = require('mysql')

app.use(bodyParser())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.set('views', __dirname + '/public/views')
app.set('view engine', 'ejs')

app.engine('html', ejs.renderFile);

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'badminton-sign-up'
});

app.get('/', (req, res) => {
    res.render('index.ejs', {});
})

app.get('/admin', (req, res) => {
    res.render('admin.ejs', {})
})

app.all('*', (req, res) => {
    res.status(404).send('<h1 align="center>Error 404 Page Not Found - 페이지를 찾을 수 없습니다.</h1>')
})

app.listen(80,'0.0.0.0',()=>{
    console.log('Server start at port 80');
});