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
    host: 'mysql.clh0cegn7mjp.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'iLy6wbTk795SXmw',
    database: 'smc_badminton'
});

app.get('/', (req, res) => {
    res.render('index.ejs', {});
})

app.get('/admin', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err)
            throw err

        connection.query(`select * from user`,
            (error, results) => {
                if(error)
                    throw error

                res.render('admin.ejs', {
                    data: results
                })

            })
    })
})

app.get('/complete', (req, res) => {

})

app.post('/delete', (req, res) => {

    var regex = req.body.regex
    console.log(regex)

    pool.getConnection((err, connection) => {
        if(err)
            throw err

        connection.query(`delete from user where user_id regexp ?`,[regex],
            (error) => {

                if(error)
                    throw error

                res.status(200).end();

            })
    })
})

app.post('/sign_up', (req, res) => {

    var name = req.body.name
    var userId = req.body.userId

    

    pool.getConnection((err, connection) => {
        if(err)
            throw err

        connection.query(`insert into user values(?,?,?,?,?,?)`,[],
            (error) => {

                if(error)
                    throw error

                res.redirect('/complete')

            })
    })


})

app.all('*', (req, res) => {
    res.status(404).send('<h1 align="center>Error 404 Page Not Found - 페이지를 찾을 수 없습니다.</h1>')
})

app.listen(80,'0.0.0.0',()=>{
    console.log('Server start at port 80');
});