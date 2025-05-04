import './App.css'
import { useState } from 'react';
import StudyForm from './components/StudyForm/StudyForm'
import AnswerCard from './components/AnswerCard/AnswerCard';
import { fetchStudyExplanation } from "./ai API/openAI";

function App() {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStudyRequest = async (question, level) => {
    setLoading(true);
    const result = await fetchStudyExplanation(question, level);
    setAnswer(result);
    setLoading(false);
  };

  return (
    <>
 <div className="container-App">
      <h1 className="text-center">AI Study Search</h1>
      <img src="./ai robo.png" className='img-ai' alt="" />
      <StudyForm onSubmit={handleStudyRequest} />
      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : (
        <AnswerCard answer={answer} />
      )}
    </div>
       
    </>
  )
}

export default App
