const {Pool} = require("pg");

const pool = new Pool({
    user: process.env.DB_USER || "myuser",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "mydatabase",
    password: process.env.DB_PASSWORD || "mypassword",
    port: Number(process.env.DB_PORT) || 5432,
});


export const query = async (text, params) => {
    const client = await  pool.connect();

    try{
        const result = await client.query(text, params);

        return result.rows;
    }finally {
        client.release();
    }
}

export const initializeTables = async () => {
    const userTable = "CREATE TABLE IF NOT EXISTS users()"

}