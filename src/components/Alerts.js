import React from 'react'

function alerts(props) {
  return (
   
    props.alerts&& <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
    {props.alerts.type}:
    {props.alerts.msg}
 
</div>
  )
}

export default alerts