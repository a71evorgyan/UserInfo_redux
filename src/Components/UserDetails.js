import React, { Component } from 'react';

 
class UserDetails extends Component {
render(){
    const {userInfo} = this.props;
    console.log(this.props.userInfo);

    return(
    
     
        <div style={{float: 'left'}}>
            {/* <div>First Name: {userInfo.firstName}</div>
            <div>Last Name: {userInfo.lastName}</div>
            <div>Region: {userInfo.region}</div>
            <div>Phone Number: {userInfo.phoneNumber}</div>
            <div>Email Address: {userInfo.emailAddress}</div>
            <div>Job Title Name: {userInfo.jobTitleName}</div>
            <div>Preferred Full Name: {userInfo.preferredFullName}</div> */}
           
        </div>
       
    
     );
}


}
export default UserDetails;