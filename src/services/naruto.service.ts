import {Request, Response} from 'express';
import {WELCOME_MESSAGE} from '../constants/narutoApi.constants';
import {Naruto} from '../models/naruto.model'

export class NarutoService {
  public welcomeMessage(req: Request, res: Response){
    return res.status(200).send(WELCOME_MESSAGE)
  };
};