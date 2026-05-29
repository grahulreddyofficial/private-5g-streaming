const bcrypt = require('bcrypt');
const { Client } = require('pg');

const connection = new Client({
    host: "localhost",
    user: "labadmin01",
    port: 5432,
    password: "NIST!@#$",
    database: "userdb"
});

connection.connect()
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

const insertDB = async (user) => {
    const {mail, username, password} = user;
    const hashedPassword = await bcrypt.hash(password, 12);
    const query = "insert into users (mail, username, password) values ($1, $2, $3);";
    const values = [mail, username, hashedPassword];
    await connection.query(query, values);
}

const getDB = async (user) => {
    const {mail, password} = user;
    try{
        const query = "select password from users where mail = $1";
        const result = await connection.query(query, [mail]);
        if (result.rows.length === 0) {
            return null;
        }
        return result.rows[0].password;
    } catch (err) {
            console.error(err);
            throw err;
        }
}

module.exports = {
    insertDB, getDB
}
