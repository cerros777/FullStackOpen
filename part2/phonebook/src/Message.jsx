import React from 'react'

const Message = ({message}) => {
    if(message === null) {
        return null
    }

    const messageStyle = {
        background: 'silver',
        color: message.includes('removed') ?'red' : 'green',
        fontStyle: 'italic',
        fontSize: 30,
        border: '3px solid green',
        padding: 5,
        borderRadius: 10
    }
    
    
  return (
    <div style={messageStyle}>{message}</div>
  )
}

export default Message