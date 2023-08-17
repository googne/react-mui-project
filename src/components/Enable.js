import React from 'react'

const Enable = ({ off, children }) => {
  return <>{!off || off === 'false' ? children : ''}</>
}

export default Enable
