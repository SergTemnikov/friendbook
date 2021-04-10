import React, {Component} from 'react'
import s from './ProfileInfo.module.css'

export default class ProfileStatus extends Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render () {
    return (
      <div>
        <h4>Your status is:</h4>
        { !this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
          </div>
        }
        { this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
          </div>
        }
        
      </div>
    )
  }
  
}

