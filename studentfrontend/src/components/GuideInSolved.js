import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledPaper = styled(Paper)({
    width: '300px',
    height: '200px',
    margin: 'auto',
    padding: '10px',
    marginTop: '400px',
    textAlign: 'center',
    });

const StyledButton = styled(Button)({
margin: '5px',
});
    
  
const GuideInSolved = () => {
    const navigate = useNavigate();
    const handleReturnClick = () => {
        navigate('/SolvedQuestion');
        }    
  return(
    <div>
      <StyledPaper>
        <Typography component="h1" variant="h5">
          <img src='src/components/スクリーンショット 2022-07-04 11.35.36.jpg'></img>
        </Typography>
        <StyledButton variant="outlined" color="primary" onClick={handleReturnClick}>
              戻る
        </StyledButton>
      </StyledPaper>
    </div>
  )
}

export default GuideInSolved;