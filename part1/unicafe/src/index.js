import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ( {text, onClick} ) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad === 0) return <div><p>No feedback given</p></div>

  const getAverage = () => {
    if (good + neutral + bad === 0) return 0
    return (good + (bad * -1)) / (good + neutral + bad)
  }

  const getPositive = () => {
    if (good + neutral + bad === 0) return 0
    return good / (good + neutral + bad) * 100
  }

  return (
    <div>
    <h1>statistics</h1>
      <table>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={good + neutral + bad} />
        <Statistic text="average" value={getAverage()} />
        <Statistic text="positive" value={getPositive() + ' %'} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log('good clicked')

    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    console.log('neutral clicked')

    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    console.log('bad clicked')

    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button text='good' onClick={handleGoodClick} />
      <Button text='neutral' onClick={handleNeutralClick} />
      <Button text='bad' onClick={handleBadClick} />

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)