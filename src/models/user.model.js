// /*Get All Registered Users*/
// const selectAllUser = () => {
//     return db.query('select * from teacher_app.user');
// }

// /*Get User by ID */
// const selectUserById = (userId) => {
//     return db.query('select * from teacher_app.user where id = ?', [userId])
// }

// /*Get User by role*/
// const selectUserByRol = (roleId) => {
//     return db.query('select * from teacher_app.user where role_id = ?', [roleId])
// }

// /*Get All Active Professor - Get All Inactive Professors 
// select * from teacher_app.user u join teacher_app.role r on u.role_id = r.id where r.role_name = 'Profesor' and u.isActive = 1*/
// const selectUserByRolAndState = (isActive, roleName) => {
//     return db.query('select * from teacher_app.user u join teacher_app.role r on u.role_id = r.id where r.role_name = ? and u.isActive = ?', [roleName , isActive]);
// }

// /*insert usuario*/ 
// const insertUser = ({
//     username,
//     password,
//     email,
//     name,
//     postal_code,
//     country,
//     //role_id,
//     role,
//     isActive,
//     longitude,
//     latitude,
//     experience,
//     hourly_rate,
//     image,
//     phone
// }) => {
//     return db.query(
//         'insert into teacher_app.user(username,password,email,name,postal_code,country,role_id,isActive,longitude,latitude,experience,hourly_rate,image,phone) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
//         [
//             username,
//             password,
//             email,
//             name,
//             postal_code,
//             country,
//             //role_id,
//             role,
//             isActive,
//             longitude,
//             latitude,
//             experience,
//             hourly_rate,
//             image,
//             phone
//         ]
//     )

// }


// module.exports = {selectAllUser, selectUserByRol, insertUser, selectUserByRolAndState}
const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/db.js");
const {Student} = require("./student.model.js");
const {Teacher} =  require("./teacher.model.js")
const {Comments} =  require("./comments.model.js")


const User = sequelize.define(
    "User",
    {
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
            
        },
        password:{
            type: DataTypes.STRING,
            
        },
        email:{
            type: DataTypes.STRING,
            
        },
        name:{
            type: DataTypes.STRING,
            
        },
        postal_code:{
            type: DataTypes.STRING,
            
        },
        country:{
            type: DataTypes.STRING,
            
        },
        //role_id,
        role:{
            type: DataTypes.STRING
            
        },
        isActive:{
            type: DataTypes.STRING,
            
        },
        longitude:{
            type:  DataTypes.STRING,
        },
        latitude:{
            type: DataTypes.STRING,
            
        },
        experience:{
            type: DataTypes.STRING,
            
        },
        hourly_rate:{
            type: DataTypes.STRING,
            
        },
        image:{
            type: DataTypes.STRING,
            
        },
        phone:{
            type: DataTypes.STRING,
            
        },
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false,
            primaryKey: true,
            unique:true
        }

    },{
    timestamps: true
}  
)

//Relacion con estudiantes
User.hasMany(Student, {
    foreignKey: "userId",
    sourceKey: "id",
})
Student.belongsTo(User, {
    foreignKey: "userId",
    targetKey: "id",
})
//Relacion con profesores
User.hasMany(Teacher, {
    foreignKey: "userId",
    sourceKey: "id",
})
Teacher.belongsTo(User, {
    foreignKey: "userId",
    targetKey: "id",
})

//Relacion con comentarios
User.hasMany(Comments, {
    foreignKey: "userId",
    sourceKey: "id",
})
Comments.belongsTo(User, {
    foreignKey: "userId",
    targetKey: "id",
})

// Teacher.sync()   /*Se utiliza para crear las tablas*/
// User.sync()  /*Se utiliza para crear las tablas*/
// Student.sync()   /*Se utiliza para crear las tablas*/
// Comments.sync()   /*Se utiliza para crear las tablas*/
  

module.exports={User};