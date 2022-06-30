
import React from 'react';
import AnswerMain from './AnswerMain';
import AnswerEntry from './AnswerEntry';
import AnswerAdd from "./AnswerAdd";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AnswerContext = React.createContext();
export const QuestionContext = React.createContext();

const questionList = [
  { id: 1,  question: "議事録の取り方がわかりません"  },
  { id: 2,  question: "Slackの使い方を教えて" },
  { id: 3,  question: "会社の位置がわかりません" },
]


const App = () => {
  const [questions,setQuestions] = useState(questionList);

  
  
  return (
    <AnswerContext.Provider value={answers}>
      <QuestionContext.Provider value = {[questions,setQuestions]}>
      <BrowserRouter>
        <h1>質問集</h1>
        <Routes>
          <Route exact path="/" element={<AnswerMain />} />
          <Route path="/entry" element={<AnswerEntry />} />
          <Route path="/add" element={<AnswerAdd />} />
        </Routes>
      </BrowserRouter>
      </QuestionContext.Provider>
    </AnswerContext.Provider>
  );
};

export default App;

const answers = [
  [
    'このサイト使いましょう。',
    'ggrks',
  ],
  [
    'このサイトを使いましょう。',
    '🥺',
  ],
  [
    'は？',
    'もう7月やぞ。。。',
  ],
]




