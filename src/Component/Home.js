import { Typography, Box, Chip, Grid } from "@mui/material"
import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import { useState, useEffect } from "react"
import Quiz from '../images/Quiz.webp'

function Home () {

    const [questions, setQuestions] = useState([
        {
          question: "Html Stands For _______________________",
          options: [
            "Hyper Text Makeup Language",
            "html",
            "Case Cading Style Sheet",
            "Hypertext markup language",
          ],
          correctAns: "Hypertext markup language",
        },
        {
          question: "Css Stands For _______________________",
          options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language",
          ],
          correctAns: "Casecading Style Sheet",
        },
        {
          question: "Js Stands For _______________________",
          options: ["Java Style", "Java Script", "Script", "Script Src"],
          correctAns: "Java Script",
        },
        {
          question: "Dom Stands For _______________________",
          options: ["Document Object Model", "html", "Css", "Java"],
          correctAns: "Document Object Model",
        },
        {
          question: "Ram Stands For _______________________",
          options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
          correctAns: "Random Acccess Memory",
        },
        {
          question: "Rom Stands For _______________________",
          options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
          ],
          correctAns: "Read Only Memory",
        },
      ]);

const [indexNumber, setIndexNumber] = useState(0)
const [score, setScore] = useState(0)
const [showResult, setShowResult] = useState(false);
const [counter, setCounter] = useState(30)

   useEffect(() => {
      setTimeout(()=>setShowResult(true), 30000);
    }, [])
    setInterval(() => { console.log({counter}); setCounter(counter - 1)}, 1000);
    
    
let checkQuestion = (a, b) => {
 if(a==b){
    setScore(score + 1)
 } if (indexNumber + 1 == questions.length) {
    setShowResult(true);
 } else {
    setIndexNumber(indexNumber + 1)
 }
}

return (
<>

<AppBar variant="primary" sx={{background : "white"}} position="static">
<Box sx={{display : "flex"}}>
    <img  src={Quiz} height="100" width="100" / >
</Box>
     
</AppBar>

{showResult ? <Typography variant="h6"> Your Score is {Math.round((score/questions.length)*100)} </Typography>
: 
  <Box sx={{textAlign : "center"}}>
    <Typography variant="h6" sx={{marginTop : 1}}> Question No# {indexNumber + 1} / {questions.length}  </Typography>
  <Typography variant="h6"> Time Remaining : {counter} </Typography>
  
   <Typography variant="h5" sx={{marginTop : 5}}> {questions[indexNumber].question} </Typography>
   <Box>
<Grid container sx={{marginTop : 8, display : "flex", flexDirection : "column", textAlign : "center"}}>
    <Grid item> {questions[indexNumber].options.map((e, i) => (
   <Chip key={i} onClick={()=> checkQuestion(e, questions[indexNumber].correctAns)} label={e} >  </Chip> ))
   }
   
   </Grid>
   </Grid>
   </Box>
</Box>
}
</>
)}

export default Home;