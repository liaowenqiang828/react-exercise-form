import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: "",
    gender: "",
    description: ""
  }

  render() {
    return (
        <div className="profile">
          <form>
            <h1>My Profile</h1>
            <h3>Name</h3>
            <label htmlFor="name">
              <input id="name" type="text" placeholder="Your name"/>
            </label>
            <h3>Gender</h3>
            <label htmlFor="gender">
              <input id="gender" type="text" placeholder="Male"/>
            </label>
            <h3>Description</h3>
            <textarea placeholder="Description about yourself" rows="8" cols="30"/>
            <div>
              <label>
                  <input type="checkbox" id="check"/> I have read the terms of conduct
              </label>
            </div>
              <div>
                <button type="submit">
                    Submit
                </button>
              </div>
          </form>
        </div>
    );
  }
}

export default MyProfile;


