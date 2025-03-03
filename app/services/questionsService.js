// @ts-ignore
const questionsApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&category=15&type=multiple',
  timeout: 2000
})

class QuestionsService {
  async getQuestions() {
    const response = await questionsApi.get()
    console.log('❓❓❓ received');
    console.log(response);
  }


}

export const questionsService = new QuestionsService()