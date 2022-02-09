const db = require('../config/db')

class Like {
    constructor(post_id, user_id) {
        this.post_id = post_id;
        this.user_id = user_id;
    }

     save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let day = d.getDate() + 1;
        let createdAtDate = `${yyyy}-${mm}-${day}`

        let sql = `
        INSERT INTO likes(
            post_id,
            user_id,
            created_at
        )
        VALUES(
            '${this.post_id}',
            '${this.user_id}',
            '${createdAtDate}'

        )
        `;

        return db.execute(sql);
    }

    static findAll() {

        let sql = "SELECT * FROM likes"
        return db.execute(sql);

    }

    static findById(id) {
        let sql = `SELECT * FROM likes WHERE post_id = ${id}`
        return db.execute(sql)
    }

    static deleteById(id) {
        let sql = `DELETE FROM likes WHERE id = ${id}`
        return db.execute(sql)
    }
}

module.exports = Like;