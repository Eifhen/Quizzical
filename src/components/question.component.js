import React, { Fragment } from 'react';


const QuestionComponent = ({ quiz, formFields, validation, click }) => {

    const question = quiz.question.replace(/&quot;/g,'"').replace(/&#039;/g,"'");

    const possible_answers = quiz.possible_answers.map(answer => {

        const resp = answer.replace(/&quot;/g,'"').replace(/&#039;/g,"'"); // quitamos caracteres extraños

        const form_field = formFields.find(field => field.question === question);

        const valColor = () => {
            const val = validation.find(val=>val.question === question && val.answer === resp);
            return val !== undefined ? val.color : 'btn-outline-secondary';
        };

        return (
            <div className="col-6 col-md mb-2 mt-2" key={ resp }>
                <input type="radio" 
                       className="btn-check" 
                       name={`${question}`} 
                       id={`${resp}`} 
                       value={`${resp}`} 
                       onChange={ click }
                       checked={ form_field.answer === `${resp}` } 
                />
                <label className={`btn ${ valColor() } p-0 rounded-pill form-control`} htmlFor={`${resp}`}>
                    <small>{resp}</small>   
                </label>
            </div>    
        )
    });
    
    return (
        <fieldset className="border-bottom mt-3 mb-3">
            <legend className='quiz-question'>{ question }</legend>
            <div className="row mb-3 mt-4">
               { possible_answers }
            </div>
        </fieldset>
    );
}


const QuestionListComponent = ( props ) => {
  
    return(  
        props.questions.map(quiz => {
           return (
                <QuestionComponent 
                    key={quiz.question} 
                    formFields={ props.formFields } 
                    validation={ props.validation }
                    click={ props.event } 
                    quiz={ quiz } 
                />
           )
        })
    )
}

export { QuestionListComponent }
