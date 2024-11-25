import React, { useState } from 'react';

function Word({word}) {
  const [isShow, setIsShow]=useState(false);
  const [isDone, setisDone]=useState(word.isDone);
  
  function toggleDone(params) {
    setisDone(!isDone)
  }
  
  function toggleShow(params) {
    setIsShow(! isShow);  
  }
  return (
    <tr className={isDone? "off" : ""}>
      <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? '숨기기' :'보기'}</button>
        <button class="btn_del">삭제</button>
      </td>
    </tr>
  );
}

export default Word;