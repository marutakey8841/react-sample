import React from "react";
import { StickyNote } from "./StickyNote";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { QuestionContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import "./UnsolvedQuestion.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledBox = styled (Box)({
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
});

const ToRegisterButton = () => {
    const navigate = useNavigate();
    const Register = () => {
      navigate('/Register');
    };
    return (
      <AddIcon sx={{ fontSize: 150 }} onClick={Register} color="inherit" variant="contained"/>
    );
  };
  
const SearchButtom = () => {
  return (
    <FilterAltIcon sx={{ fontSize: 150 }} color="inherit" variant="contained"/>
  );
};

const QuestionButtom = () => {
  const navigate = useNavigate();
  const Guide = () => {
    navigate('/GuideInUnsolved');
  };
  return (
    <QuestionMarkIcon  sx={{ fontSize: 150 }} color="inherit" variant="contained" onClick={Guide}/>
  )
}

const BackButtom = () => {
  const navigate = useNavigate();
  const SolvedAnswer = () => {
    navigate('/');
  };
  return (
    <ArrowForwardIcon sx={{ fontSize: 150 }} color="inherit" variant="contained" onClick={SolvedAnswer}/>
  );
};



const UnsolvedQuestion = () =>{
    const [questions,setQuestions] = useContext(QuestionContext);
    
    return (
        <div>
          {/* <h1 class="Text">質問数: {questions.length}</h1> */}
          <h1 class="Text">UnsolvedQuestion</h1>
          <StyledBox>
          {questions.map((value, idx) => {
            return <StickyNote title = {value.questionTitle} content = {value.questionContent}questionId = {value.questionId} key = {idx}/>
          })}
          </StyledBox>
          <p class="reg_text"><ToRegisterButton /></p>
          <p class="reg_fukidasi">質問登録画面へ</p>
          <p class="ser_text"><SearchButtom /></p>
          <p class="ser_fukidasi">絞り込み</p>
          <p class="bac_text"><BackButtom /></p>
          <p class="bac_fukidasi">SolvedQuestion画面へ</p>
        </div>
    )
}

export default UnsolvedQuestion;