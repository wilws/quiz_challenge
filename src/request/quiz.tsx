// Functions here send requests *Internally* via RESTful API pattern.
// Resources can also be fetched directly (communicate with db directly) by using functions in "src/controllers"


import axios from "axios";

// GET /api/quiz   or
// GET /api/quiz?cursor=:id
export async function getQuizzes(PageParam: string | null = null): Promise<Quiz> {
  const endPoint = (PageParam) ? `api/quiz?cursor=${PageParam}` : "api/quiz";
  const { data } = await axios.get(endPoint);
  return data;   
}


// GET /api/quiz/:id
export async function getQuiz(quizId: number | string): Promise<User> {
  const endPoint = `/api/quiz/${quizId}`
  const { data } = await axios.get(endPoint);
  return data;
}


// POST /api/quiz
export async function postQuiz(body: QuizInput): Promise<number> {
  const endPoint = 'api/quiz';
  const res = await axios.post(endPoint, body);
  return res.status;
}

