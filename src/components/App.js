import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
  const [currentNum, setCurrentNum] = useState(0);
    const handleChange = (e) => {
        setCurrentNum(Number(e.target.value));
    };
    return (
        <div id="main">
            <ChildComponent>
                <input id="input" onChange={(e) => handleChange(e)} />
            </ChildComponent>

            <p id="output">{Math.pow(currentNum, 2)}</p>
        </div>
    );
}


export default App;
