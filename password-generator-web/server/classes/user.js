const pool = require('../database/db')

class User {
    #username
    #private_key

    constructor(username, private_key){
        this.#username = username
        this.#private_key = private_key

        if(!this.#username || !this.#private_key){
            console.log('Username or private_key undefined')
        }
    }

    async is_in_db(){    
        const [result] = await pool.query(
            `SELECT * FROM users WHERE user = '${this.#username}' AND private_key = '${this.#private_key}';`
        )
        
        console.log(result)

        return result.length > 0
    }

    async register(){
        try {
            await pool.query(
                `INSERT INTO users(user, private_key) VALUES ('${this.#username}', '${this.#private_key}');`
            )
        } catch(err) {
            throw err
        }
    }

    async add_pass(reminder, gen_pass){
        try {
            const [result] = await pool.query(
                `SELECT id FROM users WHERE user = '${this.#username}' AND private_key = '${this.#private_key}';`
            )

            let id = result[0].id

            await pool.query(
                `INSERT INTO passwords(user_id, reminder, generated_pass) VALUES (${id}, '${reminder}', '${gen_pass}');`
            )

        } catch(err) {
            throw err
        }
    }

    get username() {return this.#username}
    get private_key() {return this.#private_key}

    set username(username) {this.#username = username}
    set private_key(private_key) {this.#private_key = private_key}
    
}

module.exports = User