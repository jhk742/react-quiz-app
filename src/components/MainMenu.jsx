import React, {useContext} from 'react'
import {QuizContext} from '../helpers/Contexts'

export default function MainMenu() {

    const {gameState, setGameState} = useContext(QuizContext)

    return (
        <div className="mainMenu div--main">
            <h3 className="title--state">Main Menu</h3>
            <button 
                className="btn--state" 
                onClick={() => {setGameState("quiz")}}>
                    Start Quiz
            </button>
        </div>
    )
}