import { Application } from 'express';
import { NarutoService } from "./services/naruto.service";

export class Controller {                         
private narutoService: NarutoService; 

constructor(private app: Application) {
this.narutoService = new NarutoService();
this.routes();
}
public routes() {
this.app.route("/").get(this.narutoService.welcomeMessage);
this.app.route("/all").get(this.narutoService.getAllNaruto)
}
}