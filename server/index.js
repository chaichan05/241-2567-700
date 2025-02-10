/*const http = require('http'); // Import Node.js core module

const host = 'localhost';// Localhost
const port = 8000;// Port number

//เมื่อเปิดเว็บไปที่ http://localhost:8000/ จะเรียกใช้งาน function requestListener
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1

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
app.get('/users', (req, res) => {
    res.json(users);
})
//path:POST /user ใช้สำหรับสร้างข้อมูล user ใหม่
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1
    users.push(user);
    res.json({
        message: 'Create new user successfully',
        user: user
    });
    //console.log('user',user);
    //res.send(req.body);
});
//path : PUT /user/:id ใช้สำหรับแก้ไขข้อมูล user ที่มี id ตามที่ระบุ
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    //หา users จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    //res.send(selectedIndex + '');
    //แก้ไขข้อมูล user 
    if (updateUser.firstname) {
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if (updateUser.lastname) {
        users[selectedIndex].lastname = updateUser.lastname;
    }

    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;



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
//path : DELETE /user/:id ใช้สำหรับลบข้อมูล user ที่มี id ตามที่ระบุ
app.delete('/user/:id', (req, res) => {
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

app.listen(port, (req, res) => {
    console.log(`Http Server is running on port` + port);
});
