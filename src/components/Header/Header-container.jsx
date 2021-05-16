import React, {Component} from 'react'
import AppHeader from './Header'
import { connect } from 'react-redux'
import {logout} from '../../redux/auth-reducer'

class HeaderContainer extends Component {
  
  render () {
    return <AppHeader {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {logout})(HeaderContainer)