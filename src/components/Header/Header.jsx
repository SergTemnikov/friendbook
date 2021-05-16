import React from 'react'
// import s from './Header.module.css'
import {Button, Typography, Layout} from 'antd'

const { Header } = Layout
const { Title } = Typography

const AppHeader = (props) => {
  return (
    <Header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Title style={{color: 'white', margin: 0}}>My buddiez</Title>
      <div  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        { 
          props.isAuth 
          ? <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Title level={4} style={{color: 'white', margin: 0, padding: 0}}>{props.login} - </Title>
              &#160;<Button type='primary' onClick={props.logout}>Logout</Button>
            </div>
          : null
        }
      </div>
    </Header>
  )
}

export default AppHeader;