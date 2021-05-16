import React, {Component} from 'react'
import { compose } from 'redux'
import { connect, Provider } from 'react-redux'
import './App.css'
import { Layout, Row, Col } from 'antd'
import withSuspense from './hoc/withSuspense'
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import { HeaderContainer,  } from './components'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/preloader'
import store from './redux/redux-store'

const { Content, Sider } = Layout

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render () {
    if(!this.props.initialized) {
      return (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Preloader />
        </div>
      )
    }
     
    return (
      <Layout style={{backgroundColor: 'white'}}>
        <Row align='middle'>
          <Col span={24}>
            <HeaderContainer/>
          </Col>
        </Row>
        <Row justify={'center'}>
         <Col span={12}>
          <Layout style={{backgroundColor: 'white'}}>
            <Sider width={200}>
              <Navbar/>
            </Sider>
            <Content style={{padding: 10}}>
              <Route path='/dialogs' render={ withSuspense(DialogsContainer) }/>
              <Route path='/profile/:userId?' render={ withSuspense(ProfileContainer) }/>
              <Route path='/users' render={ withSuspense(UsersContainer) }/>
              <Route path='/login' render={ withSuspense(Login)}/>
            </Content>
          </Layout>
         </Col>
        </Row>
        
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp})) (App)

let MyBuddiezApp = (props) => {
  return (
        <BrowserRouter>
          <Provider store={store}>
            <AppContainer />
          </Provider>
        </BrowserRouter>
      )
}

export default MyBuddiezApp