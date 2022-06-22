import React, { useState } from 'react';
import { QuestionListComponent } from '../components/question.component';


/*
    Objeto questions { 
        question:'pregunta', 
        possible_answers:['array de posibles respuestas'], 
        correct_answer:'respuesta correcta'
    }
    objeto formFields {
        question:'pregunta'
        possible_answers:[{respuesta:'resp', marcada:true}],
        correct_answer:'respuesta_correcta'
    }

 */


const QuizFormPage = ( props ) => {
    
    //*************** [ Variables ] ************

    const display = props.visible ? 'd-none' : 'd-block';
    const btnSubmit = document.querySelector("#btn");
    const score = document.querySelector("#score");
    const fields = props.questions.map(quiz => {
        return {
            question:quiz.question.replace(/&quot;/g,'"').replace(/&#039;/g,"'"),
            answer: '',
            correct_answer: quiz.correct_answer,
        }
    })

    //************** [ Hooks ] ***************
   
    const [ formFields, setFormFields ] = useState(fields);
    const [ correct_answers, setCorrectAnswers] = useState(0);
    const [ validation, setValidation ] = useState([]);

    //************* [ Methods ] ****************

    function handleChange(event){
        const { type, name, value, checked} = event.target;      
        setFormFields((formFields)=>{
            // const data =  (type === "checkbox") ? {[name] : checked} : { [name] : value };
            const field = formFields.find(m => m.question === name);
            field.answer = value;
            return [ ...formFields ];
        })
    }

    function showScore(){
        btnSubmit.classList.remove('mx-auto');
        btnSubmit.classList.add('ms-auto');
        btnSubmit.innerText = "Play Again";
        btnSubmit.type='button';
        btnSubmit.addEventListener('click', () => window.location.reload());
        score.classList.remove('d-none');
    }

    function validate(){
        setValidation((validation)=>{
            const correct_answers =  formFields.filter(m=>m.answer === m.correct_answer);
            const incorrect_answers = formFields.filter(m=>m.answer !== m.correct_answer);

            const correct_arr = correct_answers.map( answer => {
                return { question:answer.question, answer:answer.answer, color:'btn-outline-success' }
            })
            const incorrect_arr = incorrect_answers.map( answer => {
                return { question:answer.question, answer:answer.answer, color:'btn-outline-danger' }
            })

            return correct_arr.concat(incorrect_arr);
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        setCorrectAnswers(formFields.filter(m=>m.answer === m.correct_answer).length);
        validate();
        showScore();
    }

    return (
        <div className={`col-12 col-md-8 col-lg-8 p-3 mx-auto ${ display }`}>
            <div className="quizzical-brand">
                <h6 className="quiz-title mb-0 pb-0">Quizzical</h6>
                <small className='ps-3  text-center'>By Gabriel Jiménez</small>
            </div>   
            <form  onSubmit={ handleSubmit }>
                <QuestionListComponent 
                    questions={ props.questions } 
                    formFields={ formFields } 
                    validation={ validation }
                    event={ handleChange }
                />
                <div className='d-flex'>
                    <h6 id="score"className="d-none h5 fw-bold rounded-pill p-2 bg-yellow m-0 text-dark align-self-center">
                        You scored { correct_answers } / 5 correct answers
                    </h6>
                    <button type="submit" id="btn" className="btn bg-blue-crown text-white rounded-pill mx-auto">
                        Check answers
                    </button>
                </div>
            </form>
        </div>
    )
}

export { QuizFormPage }