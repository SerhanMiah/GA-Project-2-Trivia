import React from 'react'
import { useState } from 'react'
import { Button, Col, Container } from 'react-bootstrap'



// const [ currentQuestion, setCurrentQuestion ] = useState('')

// let currentIndex = 0

const Question = ({ testData, setStartVisibility, setVisible }) => {

  function showStart() {
    setStartVisibility(true)
    setVisible(false)
  }

  const [questionIndex, setQuestionIndex] = useState(0)

  const [score, setScore] = useState(0)

  function compareAnswers(event, correctAnswer) {
    setQuestionIndex(questionIndex + 1)

    if (event.target.value === correctAnswer) {
      setScore(score + 1)
    }
  }
 
  let newArray

  function arrayMagic(correctAnswer, incorrectAnswers) {
    newArray = [...incorrectAnswers, correctAnswer ].sort()
  }



  return (
    <>
      <div className='hero-container'>
        {testData.map((item, index) => {

          const { question, correctAnswer, incorrectAnswers, category, difficulty } = item
          
          if (index === questionIndex) {
         
            { arrayMagic(correctAnswer, incorrectAnswers) }
            return (
              <div className='question-section'>
                <div className='text'>
                <h3>Question category: {category}</h3>
                <h3>Question difficulty: {difficulty}</h3>
                <h3>Question {index + 1} out of {testData.length} </h3>
                <h2>Your score is: {score}</h2>
                <h3>{question}</h3>
                </div>
                {newArray.map(answer => {
                  return (
                  <div className='button-correct'>
                  <Col  className='w-100 d-none d-md-block mb-3'>
                  <Button  className='btn btn-lg btn-block' variant="outline-primary" size="lg" value={answer} onClick={(event) => { compareAnswers(event, correctAnswer); }}>{answer}</Button>
                  </Col>
                 </div>
                  )
                  })}
                
              </div>
            )
          }
        })}



        {questionIndex >= testData.length ? [<h1 className='display-3'>Quiz complete! Your final score is: {score}</h1>, 
        <div className='startQuiz '><button className='newQuiz btn btn-success btn-sm' onClick={showStart}>
          <h2 className='start-newQuiz'>Start new quiz</h2>
        
          </button></div>, testData.map((item, index) => {
          const { question, correctAnswer, incorrectAnswers } = item
          return(
  
              <Container as='main'>
                <div className='questionAnswered'>
                <h3 className='question'>{question}</h3>
                <h3 className='answers'>Correct answer: {correctAnswer}</h3>
                <h3 className='incorrect-answer'>Incorrect answers: {incorrectAnswers.map((answer, index) => {
                  return (index + 1 === incorrectAnswers.length ? `${answer}`: `${answer}, `)
                })}</h3>

                </div>
            
              </Container>
           
          )
        })  ]: ""  } 

        </div>



    </>
  )
}

export default Question