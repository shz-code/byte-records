import React, { memo } from 'react'

function Button({val,type,dispatch,records}) {
  return (
    <button type='button' className='btn' onClick={()=> dispatch({type: {type},records: {records}}) }>{val}</button>
  )
}

export default memo(Button)
