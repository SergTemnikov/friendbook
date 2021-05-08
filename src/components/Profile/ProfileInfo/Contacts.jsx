import React from 'react'

const Contacts = (props) => {
  return (
    <div>
      <h4>My contact links:</h4>
      <div><b>GitHub: </b>{props.github}</div>
      <div><b>VKontakte: </b>{props.vk}</div>
      <div><b>Facebook: </b>{props.facebook}</div>
      <div><b>Instagram: </b>{props.instagram}</div>
      <div><b>Twitter: </b>{props.twitter}</div>
      <div><b>Web site: </b>{props.website}</div>
      <div><b>Youtube: </b>{props.youtube}</div>
    </div>
  )
}

export default Contacts