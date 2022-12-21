const uuid = require('uuid').v4;

module.exports = class Role{
    static #roleList = [
        {
            id: 1,
            name: 'John Doe',
        },
        {
            id: 2,
            name: 'Jane Doe',
        }
    ];

    constructor(obj){
        obj.id = uuid();
        this.obj = obj;
    }

    save(){
        Role.#roleList.push(this.obj);
    }

    static findAll(){
        return Role.#roleList;
    }
    
    static deleteById(id){
        Role.#roleList = Role.#roleList.filter(user => user.id != id);
    }
}