import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    toggleFollowingInProgress
} from "../../redux/users-reducer";
import Users from "./users";
import Preloader from "../common/Preloader/preloader";
import {usersAPI} from '../../api/api'

class UsersContainer extends React.Component {
    componentDidMount() {
      this.props.toggleIsFetching(true);

      let {currentPage, pageSize} = this.props

      usersAPI.getUsers(currentPage, pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });    
    }

    onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsFetching(true);

      usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
        });
    }

    render() {


      return <>
          {this.props.isFetching ? <Preloader/> : null}
          <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  onPageChanged={this.onPageChanged}
                  toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                  followingInProgress={this.props.followingInProgress}/>
      </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, 
    setCurrentPage, setTotalUsersCount, 
    toggleIsFetching, toggleFollowingInProgress})(UsersContainer);