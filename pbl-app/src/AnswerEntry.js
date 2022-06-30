import React from "react";
import { useNavigate} from 'react-router-dom';
import { useContext } from "react";
import AnswerList from "./AnswerList";







const AnswerEntry = () => {
    const navigate = useNavigate();
    const handleReturnClick = () => {
    navigate('/');
  }
    return (
        <div onClick={handleReturnClick} style = {{background : "red"}}>
            ここに質問を表示させる方法がわからん
        </div>
    );
};

export default AnswerEntry;