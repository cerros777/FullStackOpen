import React from 'react'
import StatisticsLine from './StatisticsLine'

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  console.log(average)

  if (all === 0){
    return (
        <div>
            <h1>Statistics</h1>
            No feedback given
        </div>
    )
  }
    return (
    <div>
        <h1>Statistics</h1>
        <StatisticsLine txt="good" value={good}/>
        <StatisticsLine txt="neutral" value={neutral}/>
        <StatisticsLine txt="bad" value={bad}/>
        <StatisticsLine txt="all" value={all}/>
        <StatisticsLine txt="average" value={average}/>
        <StatisticsLine txt="positive" value={positive}/>
    </div>
  )
}

export default Statistics