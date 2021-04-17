import React from 'react'
import {connect} from 'react-redux'
import { setCurrentPage, getUsersData, follow, unfollow } from '../../redux/users-reducer'
import Users from "./users"
import Preloader from "../common/Preloader/preloader"
import { compose } from "redux"
import { getUsers, getPageSize, getTotalUsersCount,
  getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors'

class UsersContainer extends React.Component {
  componentDidMount() {
    let {currentPage, pageSize, getUsersData} = this.props
    getUsersData(currentPage, pageSize)  
  }

  onPageChanged = (pageNumber) => {
    let { getUsersData, pageSize} = this.props
    getUsersData(pageNumber, pageSize)
  }

  render() {

    let {totalUsersCount, pageSize, currentPage, 
          users, follow, unfollow, followingInProgress} = this.props

    let {onPageChanged} = this

    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users 
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        users={users}
        onPageChanged={onPageChanged}
        follow={follow}
        unfollow={unfollow}
        followingInProgress={followingInProgress}
      />
    </>
  }
}

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