import { useState,useEffect } from 'react';
import './App.scss'

function App() {
  const [num,setNum] = useState(0);
  const [rangeStart, setRangeStart] = useState(1);
  const [rangeEnd, setRangeEnd] = useState(100);
  const [selectedNums,setSelectedNums]  = useState([]);
  const [selectedNumsString, setSelectedNumsString] = useState("");


  useEffect(()=>{
    let string = "";
    let i =0;
    if(selectedNums.length > 0){
      for(i;i<selectedNums.length-1;i++){
        string+=selectedNums[i]+","
      }
      string+=selectedNums[selectedNums.length-1]
    }
    else{
      string = "없음"
    }
    setSelectedNumsString(string)
    console.log(selectedNumsString)
  },[selectedNums])
  
  useEffect(()=>{
    setSelectedNums([])
  },[rangeStart,rangeEnd])


  const generateRandomNumber= () =>{
    if(selectedNums.length < rangeEnd-rangeStart+1){
      let genNum;
      do{
        genNum = Math.floor(Math.random()*(rangeEnd-rangeStart+1)+rangeStart);
      }while(selectedNums.includes(genNum))

      setNum(genNum);
      setSelectedNums([...selectedNums,genNum])
    }
  }


  return(
    <div className="scaffold">
      <div className="title">
          <h1 id="korean-title"> 랜덤 숫자 생성 </h1>
          <h2 id="english-title"> Random Number Generator</h2>
      </div>

      <div className="random-number-scaffold">
        <div id="show-range">
          <form action="">
            <input type="number" value={rangeStart} onChange={(e)=>{setRangeStart(e.target.value)}}/>
            <h1>~</h1>
            <input type="number" value={rangeEnd} onChange={(e)=>{setRangeEnd(e.target.value)}}/>
          </form>
        </div>
        <h1 id="number">{num}</h1>
        <button onClick={generateRandomNumber}> 번호 뽑기!</button>
        <p id="mini-title"> 선택된 숫자들 </p>
        <div className="selected-nums">
          {selectedNumsString}
        </div>
      </div>
    </div>
  );
}

export default App
