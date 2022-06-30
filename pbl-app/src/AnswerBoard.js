import React from 'react';
import AnswerList from './AnswerList';
import { useContext } from 'react';
import { QuestionContext } from './App';


const titles = [
  
  ["議事録の取り方がわかりません"],
  ["Slackの使い方を教えて"],
  ["会社の位置がわかりません"],
]

const AnswerBoard = (props) => {
  const [questions,setQuestions] = useContext(QuestionContext);
  
  return (
    <div>
    <div className="listsContainer">
      {questions.map((value,idx) => (
      <AnswerList title={value.question} answers={props.answers[0]}/>
      ))
    };
  
      </div>
    </div>
  );
};
export default AnswerBoard;