import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>
        {text}
      </button>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const handleVote = () => {
    console.log(points)
    let pointsCopy = [...points]

    pointsCopy[selected] += 1
    setPoints(pointsCopy)
  }

  const handleClick = () => setSelected(Math.floor((Math.random() * anecdotes.length)))

  const getMostVotedSelection = () => {
    let maxIndex = 0

    for (let i = 0; i < points.length; i++) 
      if (points[i] > points[maxIndex])
        maxIndex = i

    return maxIndex
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]} <br></br>
      has {points[selected]} votes <br></br>
      <Button onClick={handleVote} text={'vote'} />
      <Button onClick={handleClick} text={'next anecdote'} />

      <h1>Anecdote with most votes</h1>
      {props.anecdotes[getMostVotedSelection()]} <br></br>
      has {points[getMostVotedSelection()]} votes

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)