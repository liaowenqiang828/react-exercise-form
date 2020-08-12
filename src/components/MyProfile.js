import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: "",
    gender: "Male",
    description: "",
    check: false,
    hasValue: {
      name: false,
      description: false,
      check: false
    }
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
      hasValue: {
        ...this.state.hasValue,
        name: true
      }
    })
  }
  handleGenderChange = event => {
    this.setState({
      gender: event.target.value
    })
  }
  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value,
      hasValue: {
        ...this.state.hasValue,
        description: true
      }
    })
  }
  handleCheckBox = event => {
    this.setState({
      check: true,
      hasValue: {
        ...this.state.hasValue,
        check: true
      }
    })
  }
  handleSubmit = event => {
    console.log(this.state.name, this.state.gender, this.state.description)
  }
  render() {
    return (
        <div className="profile">
          <form onSubmit={this.handleSubmit}>
            <h1>My Profile</h1>
            <h3>Name</h3>
            <label htmlFor="name">
              <input id="name" type="text" placeholder="Your name"
                     onChange={this.handleNameChange}/>
            </label>
            <h3>Gender</h3>
            <label htmlFor="gender">
              <select id="gender" defaultValue="Male"
                      onChange={this.handleGenderChange}>
                <option>Male</option>
                <option>Female</option>
              </select>
            </label>
            <h3>Description</h3>
            <textarea placeholder="Description about yourself" rows="8" cols="30"
                      onChange={this.handleDescriptionChange}/>
            <div>
              <label>
                  <input type="checkbox" id="check" onClick={this.handleCheckBox}/> I have read the terms of conduct
              </label>
            </div>
              <div>
                <button
                    type="submit"
                    disabled={!this.state.hasValue.name || !this.state.hasValue.check || !this.state.hasValue.description}
                >
                    Submit
                </button>
              </div>
          </form>
        </div>
    );
  }
}

export default MyProfile;


