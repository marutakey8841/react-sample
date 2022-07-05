import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FaceIcon from '@mui/icons-material/Face';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import "./SolvedQuestion.css";


const ToAnswerButtom = () => {
    const navigate = useNavigate();
    const ToHome = () => {
      navigate('/UnsolvedQuestion');
    };
    return (
      <ArrowBackIcon sx={{ fontSize: 150 }} onClick={ToHome} color="inherit" variant="contained"/>
    );
  };    

const ToMypageButtom = () => {
  const navigate = useNavigate();
  const ToMypage = () => {
    navigate('/Login');
  };
  return (
    <FaceIcon sx={{ fontSize: 150 }} onClick={ToMypage} color="inherit" variant="contained"/>
  );
}

const QuestionButtom = () => {
  const navigate = useNavigate();
  const Guide = () => {
    navigate('/GuideInSolved');
  };
  return (
    <QuestionMarkIcon  sx={{ fontSize: 150 }} color="inherit" variant="contained" onClick={Guide}/>
  )
}

const SolvedAnswer = () =>{
    return(
          <div>
            <h1 class= 'Text'>SolvedQuestion</h1>
            {/* <div class="css-fukidashi">            
              <span title="UnsolvedQuestionに移動" class='ans_Buttom'><ToAnswerButtom /></span>
              <span title="マイページに移動" class='log_Buttom'><ToMypageButtom /></span>
              <span title="" class="que_Buttom"><QuestionButtom /></span>
            </div> */}
              <p class="log_text"><ToMypageButtom /></p>
              <p class="log_fukidasi">ログイン画面へ</p>
              <p class="que_text"><ToAnswerButtom /></p>
              <p class="que_fukidasi">UnsolvedQuestion画面へ</p>

          </div>
    )
}

export default SolvedAnswer;


