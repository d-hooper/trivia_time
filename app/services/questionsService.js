// @ts-ignore
const questionsApi = axios.create({
  baseURL: 'https://opentdb.com/api.php',
  timeout: 3000
})

class QuestionsService {
  async getQuestions() {
    const response = await questionsApi.get('?amount=10&category=15&type=multiple')
    console.log('❓❓❓ received');
    console.log(response);
  }


}

export const questionsService = new QuestionsService()