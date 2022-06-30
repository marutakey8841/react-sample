import AnswerBoard from "./AnswerBoard"
import React, { useState, useEffect, useContext } from 'react';
import { AnswerContext, QuestionContext } from "./App";
import { useNavigate } from "react-router-dom";
import Icon from '@mui/material/Icon';
import Fab from '@mui/material/Fab';


const AnswerMain = () => {
    const answers = useContext(AnswerContext);
    const navigate = useNavigate();
    const handleNewEntry = () => {
        navigate("/add");
    }
    return(
    <div>
        <div>      
        <AnswerBoard answers={answers} />
        </div>
         <Fab className="answer_entry-btn" color="secondary" onClick={handleNewEntry}>
         <Icon>add</Icon>
       </Fab>
    </div>
        );
};

export default AnswerMain;