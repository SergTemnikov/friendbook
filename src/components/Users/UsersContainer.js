import React from "react";
import {connect} from "react-redux";
import { setCurrentPage, getUsersData, follow, unfollow } from "../../redux/users-reducer";
import Users from "./users";
import Preloader from "../common/Preloader/preloader";
import { compose } from "redux";
import { getUsers, getPageSize, getTotalUsersCount,
  getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors'

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsersData(currentPage, pageSize)  
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersData(pageNumber, this.props.pageSize)
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: staate.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(connect(mapStateToProps, {setCurrentPage, getUsersData, follow, unfollow}))(UsersContainer)