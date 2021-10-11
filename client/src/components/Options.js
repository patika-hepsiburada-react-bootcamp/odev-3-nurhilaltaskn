import { useState } from 'react';
import { sendMessage } from '../socketApi';
import { useVote } from '../contexts/VoteContext';

function Options() {
  const { options } = useVote();
  const [selectedOption, setSelectedOption] = useState('javascript');

  const handleSelect = ({ target }) => setSelectedOption(target.value);

  const handleSubmit = () => {
    sendMessage('new-vote', selectedOption);
  };

  const total = Object.keys(options).reduce((previous, key) => previous + options[key], 0);

  // console.log(Object.values(options));
  // Object.values(options).map((item) => (total = total + item));
  // console.log('re-render', total);

  const getPercent = (key) => {
    return ((options[key] * 100) / (total === 0 ? 1 : total)).toFixed(1);
  };

  return (
    <div id="options" >
     
<table><tr><td>
      <label htmlFor="">
 
       <input
          name="option"
          type="radio"
          value="Minecraft"
          onChange={handleSelect}
          checked={selectedOption === 'Minecraft'}
        />
       {" "}Minecraft ({getPercent('Minecraft')} %)
       <br/>
<progress id="file" value={options['Minecraft']} max={total} /><br/> 
<img style={{width:"150px"}} src="/gamelogo/Minecraft.jpg"/><br/> <br/> <br/> 

      </label>     </td>
     
      <td>
      <label htmlFor="">
        <input
          name="option"
          type="radio"
          value="GTA5"
          onChange={handleSelect}
          checked={selectedOption === 'GTA5'}
        />
      {" "}  GTA5 ({getPercent('GTA5')} %)
      <progress id="file" value={options['GTA5']} max={total} /><br/> 
      <img style={{width:"150px"}} src="/gamelogo/GTA5.jpg"/><br/> <br/> <br/> 
      </label> </td>
     
      <td>
      <label htmlFor="">
        <input
          name="option"
          type="radio"
          value="CSGO"
          onChange={handleSelect}
          checked={selectedOption === 'CSGO'}
        />
       {" "} CSGO ({getPercent('CSGO')} %)
       <progress id="file" value={options['CSGO']} max={total} /><br/> 
      <img style={{width:"150px"}} src="/gamelogo/CSGO.jpg"/><br/> <br/> <br/> 

      </label></td>
      <td>
      <label htmlFor="">
        <input
          name="option"
          type="radio"
          value="LoL"
          onChange={handleSelect}
          checked={selectedOption === 'LoL'}
        />
      {" "}  LoL ({getPercent('LoL')} %)
      <progress id="file" value={options['LoL']} max={total} /><br/> 
      <img style={{width:"150px"}} src="/gamelogo/LoL.jpg"/><br/> 
      </label> 
     
      <br />
      <br />
      </td></tr></table>
      <div>
        <button onClick={handleSubmit}>VOTE!</button>
      </div>
      <br />
      <h4>TOTAL VOTE: {total}</h4>

      
    </div>
  );
}

export default Options;