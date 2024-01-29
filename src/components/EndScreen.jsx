import React, {useContext} from 'react'
import {QuizContext} from '../helpers/Contexts'

export default function EndScreen() {

    const {score, setGameState} = useContext(QuizContext)

    return (
        <div className="endScreen div--main">
            <h3 className="title--state">Congratulations on finishing the quiz!</h3>
            <p>Your score: {score} / 5</p>
            <button 
                className="btn--state"
                onClick={() => {setGameState("menu")}}>
                    Return to Main Menu
            </button>
        </div>
    )
}