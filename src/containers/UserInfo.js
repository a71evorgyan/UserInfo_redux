import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from '../data.json';
import UserDetails from '../Components/UserDetails';
import {getInfo_action} from '../actions/getInfo';


class UserInfo extends Component {

clickHandler(id){
    this.props.dispatch(getInfo_action(id));
}

render() {
  const {userInfo} = this.props;

  const users = data.map((elem) => 
    <div 
        style={{margin: '10px', cursor: 'pointer'}}
        onClick={this.clickHandler.bind(this, elem.userId)}
        key={elem.userId}>{elem.firstName} {elem.lastName}
    </div>);

  return(
      <div>
          <div style={{float: 'left', width: '30%'}}>
              {users}     
          </div>   
          <UserDetails userInfo={userInfo}/> 
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
