
/***************************************************************************
 *  Estructura del objeto que recibimos desde la API
 * *************************************************************************
 *  {
 *      response_code:0,
 *      results:[
 *          { 
    *           category: "Animals"
                correct_answer: "Black"
                difficulty: "medium"
                incorrect_answers: (3) ['White', 'Pink', 'Green']
                question: "What color/colour is a polar bear&#039;s skin?"
                type: "multiple"
            },
            {
    *           category: "Animals"
                correct_answer: "Black"
                difficulty: "medium"
                incorrect_answers: (3) ['White', 'Pink', 'Green']
                question: "What color/colour is a polar bear&#039;s skin?"
                type: "multiple"
            },
 *      ],
 *  }
 ****************************************************************************
 *  Estructura del objeto que voy a utilizar
 * *************************************************************************
 *      {
 *          question:"What color/colour is a polar bear&#039;s skin?",
 *          possible_answers: ['Black', 'White', 'Pink','Green'],
 *          correct_answer: "Black",
 *      }
 */
import shuffle from "./shuffle";

const addQuestion = ( info ) => {

    const answers = shuffle(info.incorrect_answers.concat(info.correct_answer));
    const data = {
        question: info.question,
        possible_answers: answers,
        correct_answer: info.correct_answer
    }
    return data;
}

const getQuestions = async () => {

    const questions = await fetch('https://opentdb.com/api.php?amount=5&category=27&difficulty=medium&type=multiple')
    .then(response => response.json())
    .then(data => data.results.map(res => addQuestion(res)));
    return questions;
}

export { getQuestions }