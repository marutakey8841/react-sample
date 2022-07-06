import React, { useState } from 'react';
import { useContext } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { AnswerContext } from '../App';
import { AnswersListContext } from './StickyNote';
import Answer from './Answer';
import { Identity } from '@mui/base';


const StyledButton = styled(Button)({
margin: '5px',
});

const AnswerForm = (props) => {
    //const [answers,setAnswers] = useContext(AnswerContext);
    const questionId = props.questionId;
    //const [answerlist] = useContext(AnswersListContext)
    const [answerlist,setAnswerList] = useState([])
    console.log(`http://localhost:8080/spring-boot-aks/question/findbyid/${props.questionId}`)

    const newAnswer = {id:0, answer:'', questionId:0}
    const handleAnswerChange = (event) => {
        newAnswer.answer = event.target.value;
    }
    const handleAddClick = () => {
        // 新しいIDを取得
        newAnswer.id = answerlist.length+1;
        //質問のカテゴリーidを付与
        newAnswer.questionId = questionId;
        //回答追加
        setAnswerList([...answerlist,newAnswer])
        //setAnswers([...answers]);
    }


  console.log(answerlist)
  
  return(
    <div>{answerlist.length ? (
      answerlist.map((answer,id) => {
        return <Answer key={id} Answer={answer.answer}/>
      })
        ) : (
       <div>まだ回答はありません</div>
        )}
       
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