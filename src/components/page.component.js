import React from 'react';



const PageComponent = ( { children } ) => {
    const body = document.body.classList.add("bg-whiter");
    return (
        <section className="h-min-500 d-flex">
            <span className="quiz-yellow-blob"></span>
            <span className="quiz-blue-blob"></span>
            { children }
        </section>
    )
}

export { PageComponent };