const {User} = require("../models/user.model");

const getAllUsers = async (req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).json({
        ok: true,
        status: 200,
        body: user,
    });
    } catch (error) {
        console.error('Error getting users:', error);
        res.status(500).send('An error occurred while obtaining users');
    }
}
const GetLogin = async (req, res) => {
    try {
        const {    
            email,
            username,
            password,
        } = req.body
        const user = await User.findAll({where:{email,password}});
        if(user[0]){res.status(200).json(true)}else{res.status(200).json(false);}
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Login error');
    }
}

const getUsersByRol = async (req, res) => {
    try {
        const  role  = req.params.roleId
        const Users = await User.findAll({where:{role}})
        res.json(Users)
      } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
      }
}

const getUserByRolAndState = async (req, res) => {
    try {
        const  {roleId,isActive}  = req.params
        const Users = await User.findAll({where:{role:roleId,isActive}})
        res.json(Users)
      } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
      }
}

const createUser = async (req, res) => {
   
    try {
        
        const { 
            username,
            password,
            email,
            name,
            postal_code,
            country,
            role,
            isActive,
            longitude,
            latitude,
            experience,
            hourly_rate,
            image,
            phone,
        } = req.body
        await User.create({
            username,
            password,
            email,
            name,
            postal_code,
            country,
            role,
            isActive,
            longitude,
            latitude,
            experience,
            hourly_rate,
            image,
            phone
            })
        res.status(201).json("New user created")
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
}

const updateUser = async (req, res) => {
    try {
        const datos = { 
            username,
            password,
            email,
            name,
            postal_code,
            country,
            role,
            isActive,
            longitude,
            latitude,
            experience,
            hourly_rate,
            image,
            phone,
        } = req.body
        const  id  = req.params.userId
        await User.update(datos,{where:{id}})
        res.status(202).json("Update finished")
      } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
      }
}

const deleteUser = async (req, res) => {
    try {
        const  id  = req.params.userId
        await User.destroy({where:{id}})
        res.status(202).json("User Deleted")
      } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
      }
}

const updateUserStatus = async (req, res) => {
    try {
        const  {userId, Status} = req.params
        await User.update({isActive:Status},{where:{id:userId}})
        res.status(202).json("isActive:Updated to "+Status)
      } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
      }
}


module.exports = { getAllUsers, createUser, updateUser, deleteUser, getUsersByRol, getUserByRolAndState, updateUserStatus, GetLogin }