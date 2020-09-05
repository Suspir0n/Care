import {User} from "../entity/UserEntity";
import { BaseController } from "./BaseController";
import { Request } from 'express';
import * as md5 from 'md5';
import { sign } from 'jsonwebtoken';
import config from "../setting/config";

export class AuthController extends BaseController<User> {

    constructor(){
        super(User);
    }

    async auth(request: Request){
        let { email, password } = request.body;
        if(!email || !password){
            return { status: 400, message: 'Informe o email e a senha para efetuarr o login!'};
        }

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
}