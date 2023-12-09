const {Sequelize} = require("sequelize");
//funcion para conectarse a la base de datos
const sequelize = new Sequelize(   
    /*database*/"x",
    /*User name*/"root",
    /*Password*/"", 
    {
        dialect: "mysql",
        port:3306,
    }  
)
// ejecuta la funcion de arriba y comprueba la coneccion
const dbConnectMySql = async () =>{
    try{
        await sequelize.authenticate();
        console.log("MYSQL conexión establecida");
    }catch(e){
        console.log("MYSQL error de conexión",e);
    }
}

module.exports = {sequelize, dbConnectMySql};