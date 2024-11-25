import React from 'react';
import UseFetch from '../hook/UseFetch';
import { useNavigate } from 'react-router-dom';

function CreateDay(props) {
  const day = UseFetch("http://localhost:3010/days");
  const history = useNavigate();

  function addDay(params) {
    fetch(`http://localhost:3010/days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        day: day && day.length + 1,
      }),

    })
      .then(res => {
        if (res.ok) {
          alert("생성완료")
          history(`/`)
        }
      })
      // .catch((error) => console.error('Error:', error));
  }
  return (
    <div>
      <h3>현재 일수 : {day && day.length} 일 </h3>
      <button onClick={addDay}>Day추가</button>
    </div>
  );
}

export default CreateDay;