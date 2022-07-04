import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Register from "./components/Register";
import { useState } from 'react';
import Home from "./components/home";



export const TaskCardsContext = React.createContext();
export const QuestionContext = React.createContext();
export const AnswerContext = React.createContext();

const questionList = [
  { id: 0,  question: "議事録の取り方がわかりません"},
]

const answerList = [
    [
      {
        id: 0,
        answer: '',
        categoryId: 0,
      }
    ]
  ];


  console.log(answerList)




function App() {
  const [questions,setQuestions] = useState(questionList);
  const [answers,setAnswers] = useState(answerList);



  return (
    <AnswerContext.Provider value = {[answers,setAnswers]}>
      <QuestionContext.Provider value = {[questions,setQuestions]}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
          </BrowserRouter>
      </QuestionContext.Provider>
    </AnswerContext.Provider>
  );
}

export default App;