import "./assets/index.css";
import { useState } from "react";
export function App() {
  const [next, setNext] = useState(0);
  const [input, setInput] = useState('');
  const [answers, setAnswers] = useState([]);

  const questions = [
    "Привет! Как тебя зовут?",
    "Что ты любишь делать?",
    "Твой любимый цвет?"
  ];
  function onclickNext() {
    if (input.trim() === ""){
      return
    }; 
    setAnswers([...answers, input]);
    setInput("");
    setNext(next + 1);
  }
  if (next >= questions.length) {
    return (
      <div className="container">
        <h2>Результаты опроса:</h2>
        <p>
        Привет! Тебя зовут {answers[0]}. Ты обожаешь заниматься {answers[1]}, 
        и твой любимый цвет — {answers[2]}. Здорово узнать о тебе больше!
        </p>
      </div>
    );
  }
  return (
    <div className="container">
      <h1>{questions[next]}</h1>
      <input
        value={input}
        type="text"
        placeholder="Пиши"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={onclickNext}>Далее</button>
    </div>
  );
}
