import React, { useState } from 'react';
import { Question, UserSelection } from '../types/types';
import QuestionComponent from '../components/Question/Question';
import ConfirmationModal from '../components/ConfirmationModal/ConfirmationModal';
import Results from '../components/Result/Result';
import questionsData from '../data/questions.json';
import './Survey.css';
import './Home.css'; 

const Survey: React.FC = () => {
  const [userSelections, setUserSelections] = useState<UserSelection[]>([]);
  const [errors, setErrors] = useState<{ [key: number]: string }>({});
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Convertir datos a tipo Question[] una sola vez
  const typedQuestionsData = questionsData as unknown as Question[];

  const handleSelect = (selection: UserSelection) => {
    const updatedSelections = userSelections.filter(
      (s) => s.questionId !== selection.questionId
    );
    setUserSelections([...updatedSelections, selection]);
    validateSelection(selection);
  };

  const validateSelection = (selection: UserSelection) => {
    const newErrors = { ...errors };
    if (selection.plusOptionId === selection.minusOptionId) {
      newErrors[selection.questionId] = 'No puedes seleccionar la misma opción en ambos campos';
    } else {
      delete newErrors[selection.questionId];
    }
    setErrors(newErrors);
  };

  const handleSubmit = () => {
    const unanswered = typedQuestionsData.filter((question) =>
      !userSelections.some(
        (s) => s.questionId === question.id && s.plusOptionId !== -1 && s.minusOptionId !== -1
      )
    );

    if (unanswered.length > 0) {
      alert(`Faltan ${unanswered.length} preguntas por responder`);
      return;
    }

    setIsConfirmationModalOpen(true);
  };

  const handleConfirm = () => {
    setIsConfirmationModalOpen(false);
    setShowResults(true);
  };

  const handleCancel = () => {
    setIsConfirmationModalOpen(false);
  };

  if (showResults) {
    return (
      <div className="survey">
        <h1>Encuesta DISC</h1>
        {/* Se muestra el gráfico (tabla) con los resultados como antes */}
        <Results 
          userSelections={userSelections} 
          questions={typedQuestionsData}
          onClose={() => setShowResults(false)} 
        />
        {/* Mensaje de agradecimiento y botón para volver al inicio */}
        <div className="final-message">
          <h2>¡Gracias por responder la encuesta!</h2>
          <p>
            Te agradecemos por tu tiempo. Mantente atento a las instrucciones del orador.
          </p>
          <button onClick={() => window.location.href = "/"}>Regresar a la Página de Inicio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="survey">
      <h1>Encuesta DISC</h1>
      {typedQuestionsData.map((question: Question) => (
        <div key={question.id}>
          <QuestionComponent
            question={question}
            onSelect={handleSelect}
            error={errors[question.id]}
          />
          {errors[question.id] && (
            <p className="error-message">{errors[question.id]}</p>
          )}
        </div>
      ))}
      <button onClick={handleSubmit}>Finalizar Encuesta</button>

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default Survey;
