import React, { Component } from 'react';
import { connect } from 'react-redux';
 
const UserDetails =(props) =>{
        const {userInfo} = props;
        const renderDetails = (
                <div style={{float: 'left'}}>
                    <div>First Name: {userInfo.firstName}</div>
                    <div>Last Name: {userInfo.lastName}</div>
                    <div>Region: {userInfo.region}</div>
                    <div>Phone Number: {userInfo.phoneNumber}</div>
                    <div>Email Address: {userInfo.emailAddress}</div>
                    <div>Job Title Name: {userInfo.jobTitleName}</div>
                    <div>Preferred Full Name: {userInfo.preferredFullName}</div>   
                </div>
                );

        return userInfo.userId ? renderDetails : null;   
    }
export default UserDetails;
// const mapStateToProps = (state) => {
//     return {
//             userInfo: state.userInfo,  
//     };
// }
// export default connect(mapStateToProps)(UserDetails);