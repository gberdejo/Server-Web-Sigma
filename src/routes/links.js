const express = require('express');
const router = express.Router();
const path = require('path');
//conectando a la base de datos

router.get('/Contacto',(req,res)=>{
    res.render('links/contacto');
   
});
router.get('/NuestrasPropuestas',(req,res)=>{
    res.render('links/propuesta');
});
router.get('/Inicial',(req,res)=>{
    res.render('links/inicial');
});
router.get('/Primaria',(req,res)=>{
    res.render('links/primaria');
});
router.get('/Nosotros',(req,res)=>{
    res.render('links/nosotros');
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