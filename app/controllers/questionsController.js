import { questionsService } from "../services/questionsService.js";


export class QuestionsController {

  constructor() {
    console.log('❓ controller reporting in?');
    this.getQuestions()
  }

  async getQuestions() {
    try {
      await questionsService.getQuestions()
    } catch (error) {
      console.error('Could not retrieve any questions')
    }
  }

} 