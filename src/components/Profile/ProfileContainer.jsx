import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getProfile, getStatus, updateStatus, savePhoto } from '../../redux/profile-reducer'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'

class ProfileContainer extends Component {

  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
    }

    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.userId
})

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto }), 
  withRouter, 
  WithAuthRedirect)
  (ProfileContainer)