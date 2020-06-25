const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

app.use(bodyParser.json());

const users = ["Asad", "Abu", "Sobur", "Sober", "Sabita"];

app.get('/', (req,res) =>{
    res.send('High broooooo, Wassap')
});

app.get('/user/:id', (req, res) => {
    const Id = req.params.id;
    const name = users[Id];
    res.send({Id, name});
})


//post
app.post('/addUser', (req, res) => {
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, () => console.log('Listening to port 3000'));