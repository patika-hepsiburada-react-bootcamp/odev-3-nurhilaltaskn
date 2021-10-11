import { useEffect } from 'react';
import { connectSocket, subscribeToNewMessages } from '../socketApi';
import Question from './Question';
import Options from './Options';

import { useVote } from '../contexts/VoteContext';

function Container() {
  const { setOptions } = useVote();

  useEffect(() => {
    connectSocket();

    subscribeToNewMessages((data) => {
      setOptions(data);
    });
  }, [setOptions]);

  return (
    <div style={{fontFamily:"Roboto", border:"3px solid #565656", backgroundColor:"#dddddd", width:"660px", padding:"10px 0px 10px 30px"}}>
      <Question />
      <Options />
    </div>
  );
}

export default Container;

