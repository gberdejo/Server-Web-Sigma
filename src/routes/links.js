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
/* Api Recetas */
router.post('/api/user',(req,res)=>{
    var {nombre,apellido,edad,direccion} = req.body;
    var dni = {
        nombre,apellido,edad,direccion
    }
    console.log(dni);
    res.status(200).send(dni);
});




module.exports = router; 