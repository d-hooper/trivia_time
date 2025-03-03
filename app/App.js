import { QuestionsController } from "./controllers/questionsController.js"


class App {

  questionsController = new QuestionsController

}

window['app'] = new App()