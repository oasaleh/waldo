/* --------------------------------- imports -------------------------------- */
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { db, storage } from '../firebase/config';
/* ---------------------------------- style --------------------------------- */
const FormBox = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: block;
  border: 0.5px solid lightgray;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  /* padding-top: 100px; */
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: 0.5s;
  overflow: auto;
  transition: all 0.3s linear;
`;
const SubmissionForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 500px;
  /* padding: 60px 10px; */
  background-color: snow;
  z-index: 1;
  position: absolute;
  float: left;
  left: 50%;
  top: 50%;
  margin: auto;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  /* padding-bottom: 80px; */
`;
const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const CancelButton = styled.button`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border: 1px solid gray;
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 40px 2px;
  cursor: pointer;
  border-radius: 8px;
  :hover {
  }
  :active {
    background-color: #85312e;
  }
`;

const SubmitButton = styled.input`
  background-color: #dd524c; /* Green */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 40px 2px;
  cursor: pointer;
  border-radius: 8px;
  :hover {
    background-color: #85312e;
  }
  :active {
    background-color: #85312e;
  }
`;
/* -------------------------------- component ------------------------------- */
function SubmitScore({ time, setWon }) {
  const [inputValue, setInputValue] = useState('');
  function handleChange(event) {
    setInputValue(event.target.value);
  }
  function handleCancel(event) {
    event.preventDefault();
    setWon(false);
  }
  function handleClick(event) {
    alert('A name was submitted: ' + inputValue);
    event.preventDefault();
    if (inputValue !== '') {
      db.collection('leaderboard')
        .doc(inputValue)
        .set({ name: inputValue, time })
        .then(() => console.log('Success'))
        .catch((error) => console.log('Error', error));
    }
    setWon(false);
    // location.href = 'www.yoursite.com';
  }
  return (
    <FormBox>
      <SubmissionForm>
        <h3
          style={{ paddingBottom: '8%', fontWeight: '800', fontSize: '2em' }}
          id="title"
        >
          You found them all!
        </h3>
        <p id="text">in {time} seconds!</p>
        <input
          style={{ marginTop: '9%' }}
          type="text"
          placeholder="ENTER YOUR NAME"
          value={inputValue}
          onChange={handleChange}
        />
        <ButtonsRow>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
          <Link to="/levels">
            <SubmitButton type="submit" value="Submit" onClick={handleClick} />
          </Link>
        </ButtonsRow>
      </SubmissionForm>
    </FormBox>
  );
}

export default SubmitScore;
