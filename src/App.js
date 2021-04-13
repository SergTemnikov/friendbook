import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {Route, withRouter} from "react-router-dom"
import {  DialogsContainer, UsersContainer, ProfileContainer, HeaderContainer, Login } from './components'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/preloader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render () {
    if(!this.props.initialized) {
      return (
        <div style={{height: '100vh',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Preloader />
        </div>
      )
    }
     

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
          <Route path='/users' render={ () => <UsersContainer />}/>
          <Route path='/login' render={ () => <Login />}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initializeApp})) (App)