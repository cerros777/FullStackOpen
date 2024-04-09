import React from 'react'

const StatisticsLine = ({txt, value}) => {
  return (
        <tr>
            <td>{txt}: </td>
            <td>{value}</td> 
        </tr>    
  )
}

export default StatisticsLine