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
        const [result] = await pool.query(`SELECT user, private_key FROM users WHERE user = ${this.#username} and private_key = ${this.#private_key};`)

        if(result.length === 0)
            return false

        return true
    }

    get username() {return this.#username}
    get private_key() {return this.#private_key}

    set username(username) {this.#username = username}
    set private_key(private_key) {this.#private_key = private_key}
    
}

module.exports = User