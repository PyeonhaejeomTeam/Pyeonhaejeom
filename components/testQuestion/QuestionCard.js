export default function QuestionCard({ question, onAnswer, currentStep, totalSteps }) {
  return (
    <div className="question_card">
      <div className="question_progress">
        <span className="question_step">{currentStep} / {totalSteps}</span>
      </div>
      <h2 className="question_title">{question.question}</h2>
      <div className="choices_grid">
        {question.choices.map((choice) => (
          <button
            key={choice.id}
            className="choice_button"
            onClick={() => onAnswer(choice.type)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
} 