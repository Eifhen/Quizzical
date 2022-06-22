import React, { useState, useEffect } from 'react';
import { getQuestions } from '../functions/questions';
import { PageComponent } from '../components/page.component';
import { QuizesIntroPage } from './quizes.intro.page';
import { QuizFormPage } from './quiz.form.page';

const QuizesPage = () => {
    // Hooks
    const [ quiz, setQuiz ] = useState({});
    const [ intro, setIntro ] = useState(true);

    useEffect( () => {
        async function allQuestions (){ 
            const questions = await getQuestions(); 
            setQuiz(questions);
        }
        allQuestions();

    }, [])

    function handleQuizIntro(){
        setIntro(intro => !intro);
    }

    return (
       <PageComponent>
            <QuizesIntroPage event={()=> handleQuizIntro } visible={ intro }/>
           { quiz.length > 0 &&  <QuizFormPage visible={ intro } questions={ quiz }/> }
       </PageComponent>
    )
}


export { QuizesPage } 