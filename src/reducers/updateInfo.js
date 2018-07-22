import data from '../data.json';

const initialState = {
    userInfo: {}
}

const updateInfo_reducer = (state = initialState, action) => {
    let result = data.find(user => user.userId === action.id);
    switch(action.type) {
        case "GETINFO":
          return {
            ...state,
            userInfo: result,
        }
        default:
          return state;
      }
    
}

export default updateInfo_reducer;