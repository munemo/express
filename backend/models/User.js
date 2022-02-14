const db = require('../config/db')


class User {
    constructor(email, password, role){
        this.email = email
        this.password = password
        this.role = role
    }

    save() {

        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let day = d.getDate();
        let createdAtDate = `${yyyy}-${mm}-${day}`

        let sql = `
        INSERT INTO candidates(
            email,
            password,
            role,
            created_at
        )
        VALUES(
            '${this.email}',
            '${this.password}',
            '${this.role}',
            '${createdAtDate}'

        )
        `;

        return db.execute(sql);
    }

    static findAll() {

        let sql = "SELECT * FROM candidates"
        return db.execute(sql);

    }

    static findById(id) {
        let sql = `SELECT * FROM candidates WHERE id = ${id}`
        return db.execute(sql)
    }

    static findByString(email) {
        
        let sql = 'SELECT * FROM candidates WHERE email =?'
        return db.query(sql, email)
    }
    
    
    static deleteById(id) {
        let sql = `DELETE FROM candidates WHERE id = ${id}`
        return db.execute(sql)
    }

}

module.exports = User;