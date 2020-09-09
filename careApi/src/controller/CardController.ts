import { Request } from 'express';
import { BaseController } from "./BaseController";
import { CardEntity } from '../entity/CardEntity';

export class CardController extends BaseController<CardEntity> {

  constructor() {
    super(CardEntity);
  }
  async save(request: Request) {
    let _card = <CardEntity>request.body;
    
    super.isRequired(_card.numCard, 'O numero do cartão é obrigatório');
    super.isRequired(_card.name, 'O nome do titular é obrigatória');
    super.isRequired(_card.dateValid, 'A data de validade é obrigatória');
    super.isRequired(_card.codSecurity, 'O codigo de segurança é obrigatória');

    return super.save(_card, request);
  }
}