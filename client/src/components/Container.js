import { useEffect } from 'react';
import { connectSocket, subscribeToNewMessages } from '../socketApi';
/*import Question from './Question';
import Options from './Options';
*/

function Container() {


  useEffect(() => {
    connectSocket();


  }, []);

  return (
    <div>
    
    </div>
  );
}

export default Container;