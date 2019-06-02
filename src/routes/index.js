const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    //entrando a la pagina principal
    res.render('links/principal');
});
module.exports = router;

