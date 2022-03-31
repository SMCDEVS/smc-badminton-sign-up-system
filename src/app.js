const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mysql = require('./model/database')

app.use(bodyParser())
app.use(express.urlencoded({extended:false}))
app.use(express.static('src/public'))

app.set('views', __dirname + '/public/views')
app.set('view engine', 'ejs')

app.engine('html', ejs.renderFile);

app.get('/', (req, res) => {
    res.render('index.ejs', {});
})

app.get('/iLy6wbTk795SXmw/admin', async (req, res) => {

    let results = await mysql.execute(`select * from user`)
    res.render('admin.ejs', {data: results})

})

app.get('/health', (req, res) => {
    res.json({"status" : "ok"})
})

app.get('/400_error', (req, res) => {
    res.render('400_error')
})

app.post('/delete', (req, res) => {

    var regex = req.body.regex
    console.log(regex)

    mysql.executeQuery(`delete from user where user_id regexp ?`,[regex])
    res.status(200).end()
})

app.post('/sign_up', async (req, res) => {

    let name = req.body.name
    let studentId = req.body.studentId
    let studentPhoneNumber = req.body.phoneNumber

    if(name == undefined || studentId == undefined || studentPhoneNumber == undefined ||
    name == '' || studentId == '' || studentPhoneNumber == ''){
        res.status(400).end()
        return
    }

    let grade = studentId.substring(0,1)
    let _class = studentId.substring(1,3)
    let number = studentId.substring(3,5)

    console.log(`학년 : ${grade} , 반 : ${_class} , 번호 : ${number}`)
    let results = await mysql.execute(`select * from user where user_id = ${studentId}`)

    console.log(results)

    let isOverlap = results[0] == undefined ? false : true

    if(!isOverlap)
        mysql.executeQuery(`insert into user values(?,?,?,?,?,?)`, [studentId, grade, _class, number, name, studentPhoneNumber])
    else
        mysql.executeQuery('update user set user_name = ?, user_phone_number = ? where user_id = ?', [name, studentPhoneNumber, studentId])

    res.status(200).end()
})

app.all('*', (req, res) => {
    res.status(404).send('<h1 align="center">Error 404 Page Not Found - 페이지를 찾을 수 없습니다.</h1>')
})

app.listen(80,'0.0.0.0',()=>{
    console.log('Server start at port 80');
});
