import { useState } from 'react'
import Statistics from './Statistics'
import Button from  './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(prevGood => prevGood + 1)
  }

  const neutralCick = () => {
    setNeutral(prevNeutral => prevNeutral + 1)
  }

  const badClick = () => {
    setBad(prevBad => prevBad + 1)
  }

  const total = good + bad + neutral

  const positive = (good / total) *100

  const average = () => {
    return (good + (neutral * 0) + (bad * -1)) /total
  }
  console.log(average())



  return (
    <div>
      <h1>give feedback</h1>
      <Button txt="good" handleClick={goodClick}/>
      <Button txt="neutral" handleClick={neutralCick}/>
      <Button txt="bad" handleClick={badClick}/>
      
      <Statistics 
      good = {good} 
      neutral={neutral}
      bad={bad}
      all={total}
      average={average()}
      positive={positive}/>

    </div>
  )
}

export default App
