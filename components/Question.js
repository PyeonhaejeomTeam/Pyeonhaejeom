return (
  <div className="question_container">
    <div className="question_header">
      <span className="question_counter">
        {currentQuestionNumber} / {totalQuestions}
      </span>
      <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-[#7c3aed] to-[#10b981] text-transparent bg-clip-text">
        {question}
      </h2>
    </div>
    
    {/* ... 나머지 코드 유지 ... */}
  </div>
); 