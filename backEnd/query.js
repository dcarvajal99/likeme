const { json } = require('express');
const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Daxer_PEGA_200K',
    database: 'likeme',
    allowExitOnIdle: true
});

const getData = async () => {
    const result = await pool.query("Select * from posts");

    console.log(result.rows);
    return (result.rows);

}

const insertData = async (titulo, img, descripcion) => {
    const insert = "INSERT INTO posts values (DEFAULT, $1, $2, $3, 0)";
    const values = [titulo, img, descripcion];
    const result = await pool.query(insert, values);
    console.log("post agregado");
}

const insertLike = async (id) => {
    const update = "UPDATE posts SET likes = (likes + 1) where id = $1";
    const values = [id];
    const result = await pool.query(update, values);
    console.log("post agregado");
}

module.exports = { insertData, getData, insertLike };