import React from 'react'
import addNotification from 'react-push-notification'
const Not = () => {
    const notfy =(()=>{
        addNotification({
            title:'hello',
            message:'Hiii people',
            duration:4000,
            native:true,
            onClick:()=>console.log('notify me')
        })
    })
  return (
    <div>
        <button onClick={notfy} className="btn"> send</button>
    </div>
  )
}

export default Not