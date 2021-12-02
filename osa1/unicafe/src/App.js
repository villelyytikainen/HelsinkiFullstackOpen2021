import React, {useState} from 'react';


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Title title="Asdas"/>
      <Button handleClick={() => setGood(good+1)} text='good' />
      <Button handleClick={() => setNeutral(neutral+1)} text='neutral'/>
      <Button handleClick={() => setBad(bad+1)} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

const Title = ({title}) => {
  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticsLine = (props) => {
  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good > 0 || neutral > 0 || bad > 0){
    return(
      <div>
        <Title title="statistics" />
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={good+neutral+bad} />
        <StatisticsLine text="average" value={(good+neutral+bad)/3} />
        <StatisticsLine text="positive" value={`${(good/(good+neutral+bad))*100}%`} />
      </div>
    )
  }
  else{
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}
export default App;
