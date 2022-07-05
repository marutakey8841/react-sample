import React from 'react';
import { useContext } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { AnswerContext } from '../App';
import { AnswersListContext } from './StickyNote';
import Answer from './Answer';

const StyledButton = styled(Button)({
margin: '5px',
});

const AnswerForm = (props) => {
    const [answers,setAnswers] = useContext(AnswerContext);
    const questionId = props.questionId;
    const [answerlist] = useContext(AnswersListContext)

    const newAnswer = {id:0, answer:'', questionId:0}
    const handleAnswerChange = (event) => {
        newAnswer.answer = event.target.value;
    }
    const handleAddClick = () => {
        // 新しいIDを取得
        newAnswer.id = answerlist.length;
        //質問のカテゴリーidを付与
        newAnswer.questionId = questionId;
        //回答追加
        answerlist.push(newAnswer);
        console.log(answerlist);
        setAnswers([...answers]);
    }

  return(
    <div>
      {answerlist.map((answer,id) => {
        if(id > 0){
        return (
          <Answer key={answer.questionId} Answer={answer.answer}/>
          )} else{
            return (<div></div>)
          }
      })}
      <form action="sample-form.php" method="post" target="_blank">
        <TextField variant="filled" margin="normal" id="answer" label="回答" name = "answer" onChange={handleAnswerChange}  />
        <div>
          <StyledButton variant="contained" color="primary" onClick={handleAddClick}>
           投稿する
          </StyledButton>
        </div>
      </form>
    </div>
  )
}

export default AnswerForm;