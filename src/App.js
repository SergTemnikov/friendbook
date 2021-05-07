import React, {Component} from 'react'
import { compose } from 'redux'
import { connect, Provider } from 'react-redux'
import './App.css'
import withSuspense from './hoc/withSuspense'
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import { HeaderContainer,  } from './components'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/preloader'
import store from './redux/redux-store'

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
      <div className='app-wrapper'>
        <div className='container'>
          <HeaderContainer/>
          <div className='contentWrapper'>
            <div className='content'>
              <div>
                <Navbar/>
              </div>
              <div className='mainContent'>
                <Route path='/dialogs' render={ withSuspense(DialogsContainer) }/>
                <Route path='/profile/:userId?' render={ withSuspense(ProfileContainer) }/>
                <Route path='/users' render={ withSuspense(UsersContainer) }/>
                <Route path='/login' render={ withSuspense(Login)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
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