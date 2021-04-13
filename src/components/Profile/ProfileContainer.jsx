import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
    }
      
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.userId
})

export default compose(connect(mapStateToProps, {getProfile, getStatus, updateStatus}), withRouter, WithAuthRedirect)(ProfileContainer)