import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { QuestionContext } from '../App';
import { AppBar } from '@mui/material';
import { AnswerContext } from '../App';



const StyledPaper = styled(Paper)({
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '200px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '100px',
  });
  
const StyledAvatar = styled(Avatar)({
backgroundColor: '#EE0290',
});

const StyledButton = styled(Button)({
margin: '5px',
});


const Register = () => {
    const [questions,setQuestions] = useContext(QuestionContext);
    const [answers,setAnswers] = useContext(AnswerContext);
    const navigate = useNavigate();
    const newQuestion = {id:0,question:''}
    const newAnswer =  
      {
        id: 0,
        answer: '',
        categoryId: 0,
      }
    var toString = Object.prototype.toString

    
    

    const handleQuestionChange = (event) => {
        newQuestion.question = event.target.value;
    }
    const handleAddClick = () => {
        // 新しいIDを取得
        newQuestion.id = questions.length 
        newAnswer.categoryId = questions.length


        //質問追加
        setQuestions([...questions,newQuestion]);
        setAnswers([...answers,[newAnswer]])

        
        // 質問一覧へ遷移
        navigate('/');
    }
    const handleReturnClick = () => {
    navigate('/');
    }

  return(
    <body className='register'>
      <AppBar/>
      <StyledPaper>
        <Typography component="h1" variant="h5">
          質問の登録
        </Typography>
        <form className="question_entry-form" noValidate>
          <TextField variant="outlined" margin="normal" id="question" label="質問内容" name = "question" onChange={handleQuestionChange} />
          <div className="question_entry-buttons">
            <StyledButton variant="outlined" color="primary" onClick={handleReturnClick}>
              キャンセル
            </StyledButton>
            <StyledButton variant="contained" color="primary" onClick={handleAddClick}>
              登録
            </StyledButton>
          </div>
        </form>
      </StyledPaper>
    </body>
  )
}

export default Register;