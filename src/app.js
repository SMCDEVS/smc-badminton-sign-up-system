var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var ejs = require('ejs')
var mysql = require('./model/database')

app.use(bodyParser())
app.use(express.urlencoded({extended:false}))
app.use(express.static('src/public'))

app.set('views', __dirname + '/public/views')
app.set('view engine', 'ejs')

app.engine('html', ejs.renderFile);

app.get('/', (req, res) => {
    res.render('index.ejs', {});
})

app.get('/_pmj_/admin', async (req, res) => {

    let results = await mysql.execute(`select * from user`)
    console.log(results)
    res.render('admin.ejs', {data: results})

})

app.get('/complete', (req, res) => {
    res.send('<h1 align="center">회원가입이 성공적으로 완료되었습니다!</h1>')
})

app.post('/delete', (req, res) => {

    var regex = req.body.regex
    console.log(regex)

    mysql.executeQuery(`delete from user where user_id regexp ?`,[regex])
    res.status(200).end()
})

app.post('/sign_up', (req, res) => {

    let name = req.body.name
    let studentId = req.body.studentId
    let studentPhoneNumber = req.body.phoneNumber

    let grade = studentId.substring(0,1)
    let _class = studentId.substring(1,3)
    let number = studentId.substring(3,5)

    console.log(grade)
    console.log(_class)
    console.log(number)

    mysql.executeQuery(`insert into user values(?,?,?,?,?,?)`, [studentId, grade, _class, number, name, studentPhoneNumber])
    res.redirect('/complete')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1 align="center>Error 404 Page Not Found - 페이지를 찾을 수 없습니다.</h1>')
})

app.listen(80,'0.0.0.0',()=>{
    console.log('Server start at port 80');
});
