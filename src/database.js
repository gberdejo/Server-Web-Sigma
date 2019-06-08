/*const mysql = require('mysql');
const {promisify} = require('util'); //creando objeto
const {database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err,connection)=>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('Coneccion a la base de datos perdida');
        }
        if(err.code ==='ER_CON_COUNT_ERROR'){
            console.log('la base de datos a teniado muchas conecciones');
        }
        if(err.code === 'ECONNREFUSED'){

            console.log('la base de datos se niega a conectar');
        }
        
        }
    if(connection){
        connection.release();

    }
    
    console.log('La base de datos esta conectado');
    return;

    
        
});;

pool.query = promisify(pool.query);
module.exports = pool;*/