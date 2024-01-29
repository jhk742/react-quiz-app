import React, {useState, useContext} from 'react'
import '../styles/App.css'

import MainMenu from './MainMenu'
import Quiz from './Quiz'
import EndScreen from './EndScreen'
import {QuizContext} from '../helpers/Contexts'

export default function App() {

    const [gameState, setGameState] = useState("menu")
    const [score, setScore] = useState(0)
    
    return (
        <div className="App">
            <h1>Quiz App</h1>
            <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
                {gameState === "menu" && <MainMenu />}
                {gameState === "quiz" && <Quiz />}
                {gameState === "end" && <EndScreen />}
            </QuizContext.Provider>
        </div>
    )
}