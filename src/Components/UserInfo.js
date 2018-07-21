import React, { Component } from 'react';
import data from '../data.json';
import '../Stylesheets/App.css';
import { connect } from 'react-redux';
import UserDetails from './UserDetails'

 
class UserInfo extends Component {

// state = {
//   userInfo: {},  
// }

clickHandler(id) {
    this.props.dispatch({ type: "GETINFO",
    id});
//   let result = data.find(user => user.userId === id);
//   this.setState({
//       userInfo: result,
//   });
 
}

render() {
  const {userInfo} = this.props; 
  const users = data.map((elem) => 
    <div 
        style={{margin: '10px', cursor: 'pointer'}}
        onClick={this.clickHandler.bind(this, elem.userId)}
        data-user-id={elem.userId}
        key={elem.userId}>{elem.firstName} {elem.lastName}
    </div>);

  return(
      <div>
          <div style={{float: 'left', width: '30%'}}>
              {users}
             
          </div>

          <div>  
              
              {userInfo.userId ? 
                <div style={{float: 'left'}}>
                 {/* <UserDetails/> */}
                    <div>First Name: {userInfo.firstName}</div>
                    <div>Last Name: {userInfo.lastName}</div>
                    <div>Region: {userInfo.region}</div>
                    <div>Phone Number: {userInfo.phoneNumber}</div>
                    <div>Email Address: {userInfo.emailAddress}</div>
                    <div>Job Title Name: {userInfo.jobTitleName}</div>
                    <div>Preferred Full Name: {userInfo.preferredFullName}</div>
                </div>
                : null
            }
          </div> 
      </div>
  )
}
}

function mapStateToProps(state){
    return {
        userInfo: state.userInfo,
    }; 
}


export default connect(mapStateToProps)(UserInfo);
