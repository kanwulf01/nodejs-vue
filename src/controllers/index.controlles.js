
const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user:'postgres',
  password: 'cdzq3pal',
  database: 'firstapi',
  port:'5432',  
})

const getUser = async(req,res) =>{
const response   =  await pool.query('SELECT * FROM Users');
res.status(200).json(response.rows);
}

const postUser = async(req,res)=>{
  const { name, email } = req.body;
  const response = await pool.query('INSERT INTO Users(name,email) VALUES($1,$2)',[name,email]);
  console.log('usuario creado jiji')
    
}

const getUserById = async(req,res) =>{
  const identi = req.params.id;
  const response   =  await pool.query('SELECT * FROM Users WHERE id = $1',[identi]);
  res.status(200).json(response.rows);
  }

const DeleteById = async(req,res) =>{
  try{
  const id = req.params.id;
  const response = await pool.query('DELETE from Users WHERE id = $1',[id])
  res.status(200).json('borro algo');
  }catch(error){
    console.log(error);
  }
}

module.exports = {
    getUser,
    postUser,
    getUserById,
    DeleteById,
}