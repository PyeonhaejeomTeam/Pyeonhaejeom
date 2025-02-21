'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetchQuestions()
  }, [])

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/questions')
      const data = await response.json()
      setQuestions(data.questions)
      setLoading(false)
    } catch (error) {
      console.error('질문을 불러오는데 실패했습니다:', error)
    }
  }

  const handleAnswer = async (answer) => {
    const newAnswers = [...answers, answer]
    
    if (currentQuestion === questions.length - 1) {
      try {
        const response = await fetch('/api/questions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ answers: newAnswers }),
        })
        const data = await response.json()
        router.push(`/result?type=${data.resultType}`)
      } catch (error) {
        console.error('답변 처리에 실패했습니다:', error)
      }
    } else {
      setAnswers(newAnswers)
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  if (loading) return <div className="loading">질문을 불러오는 중...</div>

  return (
    <div className="game_container">
      <div className="question_header">
        <span className="question_counter">
          {currentQuestion + 1} / {questions.length}
        </span>
        <h2 className="question_title">
          {questions[currentQuestion].question}
        </h2>
      </div>

      <div className="choices_container">
        {questions[currentQuestion].choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(choice.value)}
            className="choice_button"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  )
} 