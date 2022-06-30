import React from 'react';
import AnswerPaper from './AnswerPaper';
import { useNavigate } from 'react-router-dom';
import AnswerEntry from './AnswerEntry';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';




const AnswerList = (props) => {
  const questionTitle = props.title;
  console.log(questionTitle);

  // タイトル部分の押下時に動作する関数
  const randomColor = "rgb(" + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ")" ;
  const navigate = useNavigate();
  const handleEntryClick = () => {
    navigate('/entry');
  };


    return (

    <div className="container" style={{background : randomColor}}>
      <h4 onClick={handleEntryClick}>{props.title}</h4>
      <div>回答数：{props.answers.length}件</div>
      {props.answers.map((answer, idx) => {
        return(
            <div key = {idx}>
             {answer}
            </div>
         )
        })
    }
    </div>
  );
};
export default AnswerList;
