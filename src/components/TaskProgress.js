import React from 'react'

export default function TaskProgress({tasks}) {
    const completetask = tasks.filter((t) => t.completed).length;
    const totaltask = tasks.length;
    const percentage = tasks.completed === 0 ? 0 : (completetask/totaltask)*100  ;

  return (
    <div className='progress-tracker'>
      <p>
        {completetask} out of {totaltask} task complete
      </p>
      <div className='progress-bar'>
        <div className='progress' style={{width: `${percentage}%`}}></div>
      </div>
    </div>
  )
}
