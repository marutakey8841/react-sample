import React from 'react';
import "./Answer.css";

  //answersを取り出す

const Answer = (props) =>{
    return(
        <div class="balloon1-right">
            {props.Answer}
        </div>
    )
}

export default Answer;