import React, {useState, useContext} from 'react'
import {QuizContext} from '../helpers/Contexts'
import { Questions } from '../helpers/QuestionBank'

export default function Quiz() {

    const {setGameState, setScore} = useContext(QuizContext)
    const [optionChosen, setOptionChosen] = useState("")
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [questions, setQuestions] = useState(Questions)

    function nextQuestion() {
        if (optionChosen === questions[currentQuestion].answer) {
            setScore(prevScore => prevScore + 1)
        }
        if (currentQuestion === questions.length - 1) {
            setGameState("end")
        }
        setOptionChosen("")
        setCurrentQuestion(prevQuestion => prevQuestion + 1)
    }

    function handleChoice(event) {
        const {value} = event.target
        setOptionChosen(value)
    }

    return (
        <div className="quiz div--main">
            <h3 className="title--state">QUIZ - Question {currentQuestion + 1}</h3>
            <div className="div--question">
                <h2>{questions[currentQuestion].prompt}</h2>
                <div className="options">
                    <label>
                        <input 
                            type="radio"
                            value="A"
                            name="options"
                            checked={optionChosen === "A"}
                            onChange={handleChoice}
                        />
                        {questions[currentQuestion].optionA}
                    </label>
                    <label>
                        <input 
                            type="radio"
                            value="B"
                            name="options"
                            checked={optionChosen === "B"}
                            onChange={handleChoice}
                        />
                        {questions[currentQuestion].optionB}
                    </label>
                    <label>
                        <input 
                            type="radio"
                            value="C"
                            name="options"
                            checked={optionChosen === "C"}
                            onChange={handleChoice}
                        />
                        {questions[currentQuestion].optionC}
                    </label>
                    <label>
                        <input 
                            type="radio"
                            value="D"
                            name="options"
                            checked={optionChosen === "D"}
                            onChange={handleChoice}
                        />
                        {questions[currentQuestion].optionD}
                    </label>
                </div>
            </div>
            {currentQuestion == questions.length - 1 ? (
                <button 
                className="btn--state" 
                onClick={nextQuestion}>
                End Quiz
                </button>
            ) : (
                <button 
                className="btn--nextQuestion"
                onClick={nextQuestion}>
                Next Question
                </button>
            )}
        </div>
    )
}