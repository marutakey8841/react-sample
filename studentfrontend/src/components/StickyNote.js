import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import AnswerForm from './AnswerForm';
import { AnswerContext } from '../App';
import { useState } from 'react';
import { useContext } from 'react';

export const AnswersListContext = React.createContext();

const StyledPaper = styled(Paper)({
  backgroundColor: "LightPink",
  height: '100%',
  width: 300,
  padding: 8,
  marginRight: 130,
  marginLeft: 130,
  marginTop: 100,
  marginBottom: 100,
});


// TListコンポーネント
export const StickyNote = (props) => {
  // カスタムフックで定義した状態をコンテキストを通じて取得
  const [state] = useContext(AnswerContext);

  // 取り扱いしやすいように対象のデータだけを取り出す
  const answerObj = state[props.categoryId];
  const [answersList,setAnswersList] = useState(answerObj);




  

  

  return (
    <AnswersListContext.Provider value={[answersList,setAnswersList]}>
      <StyledPaper>
        <h4>{props.title}</h4>
          <AnswerForm categoryId = {props.categoryId} />
      </StyledPaper>
    </AnswersListContext.Provider>
  );
};
export default StickyNote;
