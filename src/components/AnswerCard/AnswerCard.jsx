import "./stile.css";
import { detectLanguage, getFlagByLang } from "../../utils/detectLanguage";

const AnswerCard = ({ answer, originalQuestion }) => {
  if (!answer) return null;
  const lang = detectLanguage(originalQuestion);
  const flag = getFlagByLang(lang);

  return (
    <div className="section">
      <div className="border borAnswer">
        <span className="text-xl">{flag}</span>
        <h2 className="text-lg">Answer:</h2>
        <p className="text-stile">{answer}</p>
      </div>
    </div>
  );
};

export default AnswerCard;
