import { useParams } from "react-router-dom";
// import dummy from "../db/data.json"
import Word from "./Word";
import { useEffect, useState } from "react";
import UseFetch from "../hook/UseFetch";

function Day(props) {
  // const day = 1;
  // const wordList = dummy.words.filter(k=>(k.day) === Number(day))
  //url에 포함된 day값을 가져오기 위해서 useParams()
  const day = useParams().day;
  const words = UseFetch(`http://localhost:3010/words?day=${day}`)
  //const [words,setWords] = useState([]);
  // useEffect(()=>{
  //   fetch(`http://localhost:3010/words?day=${day}`)
  //   .then(res=>{
  //     return res.json()
  //   })
  //   .then(data=>{
  //     setWords(data);
  //   })
  //   .catch((error)=>console.error("Error",error));
  // },[]);

  return (
    <table>
        <tbody>
           {/* {dummy.words.map(k=>{ */}
           {words.map(k=>{
              return <Word key={k.id} word={k}/>
           })}
        </tbody>
    </table>
  );
}

export default Day;