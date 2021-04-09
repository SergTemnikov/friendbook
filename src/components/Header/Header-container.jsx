import React, {Component} from 'react'
import Header from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux'
import setAuthUserData from '../../redux/auth-reducer'

class HeaderContainer extends Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                console.log(response);
                if (response.data.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(email, login, id)
                }
            });
    }


    render () {
        return <Header {...this.props}/>
        
    }
    
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)