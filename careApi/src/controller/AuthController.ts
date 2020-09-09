
import { BaseController } from "./BaseController";
import { Request } from 'express';
import * as md5 from 'md5';
import { sign } from 'jsonwebtoken';
import config from "../setting/config";
import { UserEntity } from "../entity/UserEntity";

export class AuthController extends BaseController<UserEntity> {

    constructor(){
        super(UserEntity);
    }

    async auth(request: Request){
        let { email, password } = request.body;
        this.checkCredentialExits(email, password);

        let user = await this.repostitory.findOne({ email: email, password: md5(password) });
        if(user){
            let _payload = {
                uid: user.uid,
                fisrtName: user.firstName,
                lastName: user.lastName,
                photo: user.photo,
                email: user.email
            }
            return {
                status: 200,
                message: {
                    user: _payload,
                    token: sign({
                        ..._payload,
                        tm: new Date().getTime()
                    }, config.secretyKey)
                }
            }
        }else{
            return { status: 404, message: 'E-mail ou senha inválidos'}
        }
    }

    checkCredentialExits(email: string, password: string){
        if(!email || !password) return { status: 400, message: 'Informe o email e a senha para efetuar o login!'};
    }
}