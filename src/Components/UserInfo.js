import React, { Component } from 'react';
import data from '../data.json';
import '../Stylesheets/App.css';
import { connect } from 'react-redux';
import UserDetails from './UserDetails'
import Background from '../Images/photo.jpg';

// function getInfo_action(user_id){ //action creator
//     return {
//         type: "GETINFO",
//         user_id
//     }
// }


class UserInfo extends Component {

    getInfo_action = (user_id) =>{ //action creator
        return {
            type: "GETINFO",
            user_id
        }
    }

clickHandler = (id) => {
    this.props.dispatch({ type: "GETINFO",
    id});
    // this.props.dispatch(this.getInfo_action(id));
    
    

}


render() {
    
  const {userInfo} = this.props;
  console.log( userInfo.userId,  userInfo.firstName); 
  const users = data.map((elem) => 
    <div 
        style={{margin: '10px', cursor: 'pointer'}}
        onClick={this.clickHandler.bind(this, elem.userId)}
        key={elem.userId}>{elem.firstName} {elem.lastName}
    </div>);

  return(
      <div  className="back">
          <div style={{float: 'left', width: '30%'}}>
              {users}
             
          </div>

          <div>  
              
              {userInfo.userId ? 
                <div style={{float: 'left'}}>
                 <UserDetails userInfo={userInfo}/>
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
