// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { Category } from "./components/category.jsx"

function App() {
  const [runs, setRuns] = useState(76);
  const [wickets, setWickets] = useState(2);
  const [over, setOver] = useState(8.2);
  const [result, resultOver] = useState("afg");
  const increaseOver = () => {
    if (runs <= 100 && wickets < 12) {
      setOver(+((over + 0.1).toFixed(1)))
    }
  };
  const increaseRuns = (value) => {

    if (runs >= 100) {

      resultOver(function () {
        return (<h1 className='status'>India Won</h1>)
      })
    }
    if (runs <= 100 && wickets < 12) {
      setRuns(runs + value);
    }
  };
  const increaseWickets = () => {
    if (runs <= 100 && wickets < 12) {
      setWickets(wickets + 1);
    }
  };
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{runs}
          <h1 className="scoreCount">
            {
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{wickets}
          <h1 className="wicketCount">
            {
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{over}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => increaseRuns(1)} >Add 1</button>
        <button className="addScore4" onClick={() => increaseRuns(4)} >Add 4</button>
        <button className="addScore6" onClick={() => increaseRuns(6)} >Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={increaseWickets}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={increaseOver}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */result}
    </div>
  );
}



// function App() {
//   let [counter, setCounter] = useState(0);
//   function handle(value) {
//     return setCounter(counter += value)
//   }
//   return (
//     <div className="App">
//       <h1>Counter: {counter}</h1>
//       <button onClick={() => handle(-2)}>Add 1</button>
//     </div>
//   );
// }

// function App() {
//   let items = [
//     {
//       imageUrl: "https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
//       title: "Travel",
//     },
//     {
//       imageUrl: "https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
//       title: "Appliances",
//     },

//   ]
//   return (
//     <div className="itemList">
//       {items.map((el) => (
//         <Category imageUrl={el.imageUrl} title={el.title} />
//       ))}

//     </div>
//   );
// }

export default App;
