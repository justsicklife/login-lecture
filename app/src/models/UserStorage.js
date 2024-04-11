"use strict"

class UserStorage {
    static #users = {
        id: ["woorimIT","나개발","강팀장"],
        psword: ["1234","1234","123456"],
        name: ["우리밋","나개발","김팀장"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        // reduce 파라미터 newUsers 누적값, field 는 현제 인덱스값
        const newUsers = fields.reduce((newUsers,field) => {
            // users 필드에 field 라는 필드가 있다면 true
            if(users.hasOwnProperty(field)) {
                // users 에 있는 field 값을 누적값에 필드를 추가시킨다.
                newUsers[field] = users[field];
            }

            console.log(newUsers);
            return newUsers;
            // {} 기본값
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;