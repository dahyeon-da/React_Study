import React, {useState} from 'react';

function InputSample() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = (e) => {
    setText("");
  }

  return (
    <div>
      <input onChange={onChange} value={text}></input>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;