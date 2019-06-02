const express = require('express');
const router = express.Router();
const path = require('path');
//conectando a la base de datos
const pool = require('../database');

router.get('/add',(req,res)=>{
    res.render('links/add');
   
});
router.get('/NuestrasPropuestas',(req,res)=>{
    res.render('links/propuesta');
});
router.get('/Inicial',(req,res)=>{
    res.render('links/inicial');
});
router.post('/add', async (req,res)=>{
    const {title,url,descripcion} = req.body;
    const newlink = {
        title,
        url,
        descripcion
    };
    //await pool.query('INSERT INTO links set ?',[newlink]);
    console.log(newlink);
    res.send('resivido');
});
module.exports = router; 