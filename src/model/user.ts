import {v4 as uuidv4} from "uuid";


class User {
    id?: string;
    name!: string;
    email!: string;
    avatarUrl!: string;
    password!: string;
    created_at!: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}

export { User }