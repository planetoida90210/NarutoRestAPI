import { MongooseDocument} from 'mongoose';
import {Request, Response} from 'express';
import {WELCOME_MESSAGE} from '../constants/narutoApi.constants';
import {Naruto} from '../models/naruto.model'

export class NarutoService {
  public welcomeMessage(req: Request, res: Response){
    return res.status(200).send(WELCOME_MESSAGE)
  };
  public getAllNaruto(req: Request, res: Response) {
    Naruto.find({}, (error: Error, naruto: MongooseDocument) => {
      if(error){
        res.send(error)
      }
      res.json(naruto)
    })
  }
  public addNewCharacter(req: Request, res: Response) {
    const newCharacter = new Naruto(req.body);
    newCharacter.save((error: Error, naruto: MongooseDocument) =>{
      if(error){
        res.send(error);
      }
      res.json(naruto)
    })
  }
};