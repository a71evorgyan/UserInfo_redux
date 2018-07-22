import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from '../data.json';
import UserDetails from './UserDetails';
import {getInfo_action} from '../actions/getInfo';


class UserInfo extends Component {

clickHandler = (id) => {
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
