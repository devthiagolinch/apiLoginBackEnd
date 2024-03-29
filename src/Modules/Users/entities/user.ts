import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from "uuid";

@Entity("users")// users
class User {
    
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    avatar?: string;

    @Column()
    password: string;

    @Column()
    isAdmin: Boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}

export { User }