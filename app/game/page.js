'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { questions } from '@/data/questions'

export default function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const router = useRouter()

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer]
    if (currentQuestion === questions.length - 1) {
      router.push('/result')
    } else {
      setAnswers(newAnswers)
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  return (
    <div className="game-container">
      <div className="question-header">
        <span className="question-counter">
          {currentQuestion + 1} / {questions.length}
        </span>
        <h2 className="question-title">
          {questions[currentQuestion].question}
        </h2>
      </div>

      <div className="choices-container">
        {questions[currentQuestion].choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(choice.value)}
            className="choice-button"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
} 