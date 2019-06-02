const express = require('express');
const app = express();
const path = require('path');
const express_handlebars = require('express-handlebars');
const morgan = require('morgan');

//configuraciones

app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));
//congifurando el motor de plantilla handlebars
app.engine('.hbs',express_handlebars({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers:require('./lib/handlebars')
}));
//usando el motor de plantilla handlebars
app.set('view engine','.hbs');

//midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))//aceptar los desde los formularios los datos del usuario/datos en string
//rutas
app.use(require('./routes'));
app.use(require('./routes/links'));
//variables globales
app.use((req,res,next)=>{
    next();
});
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'),()=>{
    console.log('Server funcionando ',app.get('port'));
});