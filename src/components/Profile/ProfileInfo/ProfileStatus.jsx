import React, {Component} from 'react'
import s from './ProfileInfo.module.css'

export default class ProfileStatus extends Component {

  state = {
    editMode: false
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
  }

  render () {
    return (
      <div>
        <h4>Your status is:</h4>
        { !this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        }
        { this.state.editMode &&
          <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
          </div>
        }
        
      </div>
    )
  }
  
}

