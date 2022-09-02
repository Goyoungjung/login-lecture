const UserStorage = require('./UserStorage');

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const {id, passwd} = UserStorage.getUserInfo(this.body.id);
        const body = this.body;

        if (id) {
            if (id === body.id && passwd === body.passwd) {
                return {success : true};
            }
            return {success : false, msg : "비밀번호가 틀렸습니다."}
        }
        return {success : false, msg : "아이디가 없습니다."}
        
    }

    register() {
        const body = this.body;
        const response = UserStorage.save(body);
        return response;
    }
}


module.exports = User