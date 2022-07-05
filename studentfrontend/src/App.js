import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Register from "./components/Register";
import { useState,useEffect } from 'react';
import Home from "./components/UnsolvedQuestion";
import GuideInUnsolved from "./components/GuideInUnsolved";
import SolvedQuestion from "./components/SolvedQuestion";
import UnsolvedQuestion from "./components/UnsolvedQuestion";
import { Login } from "./components/Login";
import GuideInSolved from "./components/GuideInSolved";
import MyPage from "./components/MyPage";



export const QuestionContext = React.createContext();
export const AnswerContext = React.createContext();

const questionList = [
]

const answerList = [[{id:0,answer:'',questionId:1}

]
];

console.log(answerList);



function App() {
  const [questions,setQuestions] = useState([]);
  const [answers,setAnswers] = useState(answerList);
  useEffect(() => {
    // WebAPIよりデータをGETする。
    const fetchData = async () => {
      try {
        // WebAPIにアクセスしてレスポンスを得る
        const response = await window.fetch('http://localhost:8080/spring-boot-aks/question/findall',{
          headers: {
          'Content-Type': 'application/json',
        }});
        // ステータスが200(ok)以外のときはエラー扱いとする
        if (!response.ok) throw new Error(`Fetch Error ... ${response.status}`);
        // レスポンスのボディ部分をJSONで取得
        const body = await response.json();
        // 状態に保存
        setQuestions(body);
      } catch (error) {
        // 通信エラー時処理
        console.error(error);
      }
    };
    // このコンポーネントの初回マウント時にWebAPIからデータを得る
    fetchData();
  }, []); // ← 依存プロパティを空にして初回マウント時のみ動作

  console.log(questions)

  return (
    <AnswerContext.Provider value = { [answers,setAnswers]}>
      <QuestionContext.Provider value = {[questions,setQuestions]}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SolvedQuestion />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/GuideInSolved" element={<GuideInSolved />} />
            <Route path="/UnsolvedQuestion" element={<UnsolvedQuestion />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/SolvedQuestion" element={<SolvedQuestion />} />
            <Route path="/GuideInUnsolved" element={<GuideInUnsolved/>} />
            <Route path="/MyPage" element={<MyPage/>} />
          </Routes>
        </BrowserRouter>
      </QuestionContext.Provider>
    </AnswerContext.Provider>
  );
}

export default App;