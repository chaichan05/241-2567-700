const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise')
const app = express();

const port = 8000;
app.use(bodyParser.json());

let users = []
let conn = null
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8820
    })
}

app.get('/users', async (req, res) => {
    try {
        const results = await conn.query('SELECT * FROM users')
        res.json(results[0])
    } catch (error) {
        console.log('error', error.message)
        res.status(500).json({ error: 'Error fetching users' })
    }

})
/*
GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
POST /users สำหรับสร้าง user ใหม่บันทีกเข้าไป
GET /users/:id สำหรับดึง users รายคนออกมา
PUT /users/:id สำหรับแก้ไข user รายคน (ตาม id ที่บันทึกเข้าไป)
DELETE /users/:id สำหรับลบ user รายคน (ตาม id ที่บันทึกเข้าไป)
*/

/*app.get('/test', (req, res) => { //เรียกใช้งาน http://localhost:8000/test
    let user = {
        name: 'John',
        age: 30
    }
    res.json(user);
});
*/
//path = GET /users ใช้สำหรับดึงข้อมูล user ทั้งหมด
/*
app.get('/users', (req, res) => {
    res.json(users);
})
*/
// path = GET /users/ สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users', async(req, res) => {
    const results = await conn.query('SELECT * FROM users')
    res.json(results[0]);
})

//path:POST /user ใช้สำหรับสร้างข้อมูล user ใหม่
app.post('/users', async (req, res) => {
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?', user)
    console.log('results', results);
    res.json({
        message: 'Create user successfully',
        data: results[0]
    });
    //console.log('user',user);
    //res.send(req.body);
});
//path = GET /users/:id สำหรับดึงข้อมูล user รายคนออกมา
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    //ค้นหา  users หรือ index ที่ต้องการดึงข้อมูล
    let selectedIndex = users.findIndex(user => user.id == id);

    res.json(users[selectedIndex]);
})
//path : PUT /user/:id ใช้สำหรับแก้ไขข้อมูล user รายคน (ตาม id ที่บันทึกเข้าไป)
app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    let selectedIndex = users.findIndex(user => user.id == id);

    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;
    users[selectedIndex].age = updateUser.age || users[selectedIndex].age;
    users[selectedIndex].gender = updateUser.gender || users[selectedIndex].gender;

    res.json({
        message: 'Update user successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
    //uaers ที่ update ใหม่ update กลับไปเก็บใน users เดิม

    //res.send(id);
});
//DELETE /users/:id สำหรับลบ user รายคน (ตาม id ที่บันทึกเข้าไป)
app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    //หา index ของ user ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);

    //ลบ
    //delete users[selectedIndex];
    users.splice(selectedIndex, 1); //จะไม่ขึ้นเป็นค่า null
    res.json({
        message: 'Delete user successfully',
        indexDelete: selectedIndex
    });
})

app.listen(port, async(req, res) => {
    await initMySQL()
    console.log('Http Server is running on port'+ port);
});