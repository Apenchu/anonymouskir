// import express from "express";  
// import bodyParser from "body-parser";  
const express = require('express'); 
const bodyParser = require('body-parser'); 
const axios = require('axios')
 
const app = express();  
const port = 3000;  
 
app.set('view engine', 'ejs'); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ extended: true })); 
 
app.get('/', (req, res) => { 
    return res.render('home.ejs', {}); 
}); 

app.post('/sendMessage', (req, res) => {
    const text = req.body.text;
    const chatId = '-1001971542496';

    axios(`https://api.telegram.org/bot5993670100:AAEr5-cCnpxRAxdayDvSfRr6l6sUcZOlR_E/sendMessage?chat_id=${chatId}&text=${text}`).then((response) => {
        res.redirect('/');
    }).catch((error) => {
        res.send(error);
    });
});

app.listen(port, () => console.log(`Server running at ${port}`));
