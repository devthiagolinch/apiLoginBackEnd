import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";
import { isTypeQueryNode } from "typescript";

export class AddAdminColumnUser1646605459349 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", 
            new TableColumn({
                name: "isAdmin",
                type: "boolean",
                default: false
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "isAdmin")
    }

}
