import React from 'react';


const QuizesIntroPage = ( props ) => {
    const display = props.visible ? 'd-block' : 'd-none';
    return (
        <div className={`align-self-center mx-auto ${ display }`}>
            <div className='text-center'>
                <h6 className="quiz-title mb-3">Quizzical</h6>

                <div className="col-9 mx-auto mt-2 mb-3 pe-2 ps-2  rounded bg-white shadow-sm">
                    <div className="row ">
                        <div className="col pt-3 ps-3 border-end">
                            <p className='quiz-subtitle text-start text-break mb-1'>
                                Esta es una app realizada el 21-06-2022 
                                como práctica de React.
                            </p>
                            <p className='text-muted text-start text-break small'>
                                Esta práctica genera una trivia de 5 preguntas, realizando una petición 
                                hacia una API para obtener la trivia. Completa las preguntas y ganarás.
                            </p>
                        </div>

                        <div className="col pt-3 ps-3 ">
                            <p className='quiz-subtitle text-start text-break mb-1'>
                                This is an application made on 21-06-2022  <br />     
                                as a React practice. 
                            </p>
                            <p className='text-muted text-start text-break small'>
                                This practice generates a trivia of 5 questions, making a request to an 
                                API to obtain the trivia. Complete the questions and you will win.
                            </p>
                        </div>
                    </div>
                    <div className='text-start pb-1 ps-1'>
                        <span className='text-red-wine text-start fw-bold'>Gabriel Jiménez</span>
                    </div>
                </div>  
              
                <button onClick={ props.event() } className='btn bg-blue-crown quiz-btn-text rounded-pill text-whiter  col-4 p-3'>
                    Start quiz
                </button>
            </div>
        </div>
    )
}

export { QuizesIntroPage }