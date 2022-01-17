/**
 * Aqui é onde eu defino que o request pode aceitar o user como propriedade para repassar. Uso essa configuração
 * dentro do middleware ao enviar o request.user = user através do next();
 */

import * as express from "express"
declare global {
    namespace Express {
        interface Request {
            user? : Record<string,any>
        }
    }
}