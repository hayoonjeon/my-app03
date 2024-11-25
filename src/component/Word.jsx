import React, { useState } from 'react';

//실제 DB를 수정하자
//Create : POST
//Read : GET
//Update : PUT
//Delete : DELETE

function Word({word}) {
  const [wo,setWo] = useState(word);
  const [isShow, setIsShow]=useState(false);
  const [isDone, setisDone]=useState(word.isDone);
  
  function toggleShow(params) {
   setIsShow(! isShow);  
   
  }

    // JSON.stringify : 객체를 JSON으로 변경 (문자열화)
  // response.json() 메서드를 호출하면 JSON 데이터를 JavaScript 객체로 변환한다. (비동기)

  function toggleDone(params) {
    //setisDone(!isDone)
     //실제 DB수정하기
     fetch(`http://localhost:3010/words/${word.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
          ...word,
          isDone: !isDone,

      }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json(); // 응답 데이터를 JSON으로 변환
      }
      throw new Error(`Failed to update: ${res.status}`);
    })
    .then((updatedWord) => {
      setisDone(updatedWord.isDone); // 서버 상태로 UI 동기화
    })
    .catch((error) => console.error('Error:', error));
  }
  function del(params) {
    if (window.confirm('정말 삭제할까요?')) {
        //실제 DB수정하기
     fetch(`http://localhost:3010/words/${word.id}`,{
      method:'DELETE',

    })
      .then(res=>{
        if(res.ok){
          //상태를초기화
          setWo({id:0});
        }
      })
      .catch((error)=>console.error("Error :",error));
    }
  }
  //id가 0이면 렌더링하지않는다 
  //컴포넌트가 null 리턴하면 렌더링안함
  if(wo.id===0){
    return null;
  }
  return (
    <tr className={isDone? "off" : ""}>
      <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? '숨기기' :'보기'}</button>
        <button onClick={del} className="btn_del">삭제</button>
      </td>
    </tr>
  );
}

export default Word;


