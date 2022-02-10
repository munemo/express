const db = require('../config/db')
class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    save() {

        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let day = d.getDate();
        let createdAtDate = `${yyyy}-${mm}-${day}`

        let sql = `
        INSERT INTO users(
            email,
            password,
            created_at
        )
        VALUES(
            '${this.email}',
            '${this.password}',
            '${createdAtDate}'

        )
        `;

        return db.execute(sql);
    }

    static findAll() {

        let sql = "SELECT * FROM users"
        return db.execute(sql);

    }

    static findById(id) {
        let sql = `SELECT * FROM users WHERE id = ${id}`
        return db.execute(sql)
    }

    static findByString(email,password) {
        let sql = 'SELECT * FROM users WHERE email = ? AND password = ?'
        return db.query(sql, [email,password])

           

    }
    
    
    static deleteById(id) {
        let sql = `DELETE FROM users WHERE id = ${id}`
        return db.execute(sql)
    }

}

module.exports = User;