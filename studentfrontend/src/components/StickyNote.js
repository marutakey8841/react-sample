import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import AnswerForm from './AnswerForm';
import Answer from './Answer';
import "./StickyNote.css";
import { AnswerContext } from '../App';
import { useState } from 'react';
import { ContentCopy } from '@mui/icons-material';
import React from 'react';
import { useContext } from 'react';

export const AnswersListContext = React.createContext();

const StyledPaper = styled(Paper)({
  backgroundColor: "LightPink",
  height: '100%',
  width: 300,
  padding: 8,
  marginRight: 130,
  marginLeft: 130,
  marginTop: 50,
  marginBottom: 170,
});

// TListコンポーネント
export const StickyNote = (props) => {
  // カスタムフックで定義した状態をコンテキストを通じて取得
  const [ state ] = useContext(AnswerContext);
  const answerObj = state[props.questionId-1]
  const [answerList, setAnswersList] = useState(answerObj)
 
  return (
    <AnswersListContext.Provider value={[answerList, setAnswersList]}>
    <StyledPaper>
      <div class="center">
        <img src='https://frame-illust.com/fi/wp-content/uploads/2015/01/6ebb4091a951c8bd25ba696145f68148.png'></img>
        <h3>{props.title}</h3>
      </div>
      <div class="center">
        <AnswerForm questionId = {props.questionId}/>
      </div>
    </StyledPaper>
    </AnswersListContext.Provider>
  );
};
